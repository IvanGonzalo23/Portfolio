import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile";
import "./Terminal.css";

const HELP_LINES = [
  "comandos disponibles:",
  "  whoami       ver quién soy",
  "  sobre-mi     ir a la sección sobre mí",
  "  stack        ver mis tecnologías",
  "  proyectos    ir a la sección de proyectos",
  "  github       ver mis estadísticas en vivo de GitHub",
  "  contacto     ver mis datos de contacto",
  "  clear        limpiar la terminal",
];

function runCommand(raw) {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case "":
      return { output: [] };
    case "help":
    case "ayuda":
      return { output: HELP_LINES };
    case "whoami":
      return {
        output: [`${profile.name} — ${profile.role}`, profile.tagline],
      };
    case "sobre-mi":
    case "about":
      return { output: ["Abriendo sección sobre mí..."], scrollTo: "sobre-mi" };
    case "stack":
      return { output: ["Mostrando el stack..."], scrollTo: "stack" };
    case "proyectos":
    case "projects":
      return { output: ["Cargando proyectos..."], scrollTo: "proyectos" };
    case "github":
      return { output: ["Consultando la API de GitHub..."], scrollTo: "github" };
    case "contacto":
    case "contact":
      return { output: ["Abriendo datos de contacto..."], scrollTo: "contacto" };
    case "sudo hire-me":
      return {
        output: [
          "[sudo] contratando a Iván...",
          "listo. buena decisión. → escribí 'contacto' para escribirle",
        ],
      };
    default:
      return {
        output: [`comando no encontrado: ${cmd}`, "escribí 'help' para ver los comandos disponibles"],
      };
  }
}

export function Terminal() {
  const [history, setHistory] = useState([
    {
      command: "",
      output: [
        `${profile.name} — ${profile.role}`,
        profile.tagline,
        "",
        "esta terminal es real: escribí 'help' para navegar el portafolio.",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [cmdLog, setCmdLog] = useState([]);
  const [logIndex, setLogIndex] = useState(null);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [history]);

  function handleSubmit(e) {
    e.preventDefault();
    const value = input;
    const trimmed = value.trim().toLowerCase();

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      setCmdLog((log) => [...log, value]);
      setLogIndex(null);
      return;
    }

    const { output, scrollTo } = runCommand(value);
    setHistory((h) => [...h, { command: value, output }]);
    if (value.trim() !== "") {
      setCmdLog((log) => [...log, value]);
    }
    setLogIndex(null);
    setInput("");

    if (scrollTo) {
      window.setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdLog.length === 0) return;
      const nextIndex = logIndex === null ? cmdLog.length - 1 : Math.max(0, logIndex - 1);
      setLogIndex(nextIndex);
      setInput(cmdLog[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (logIndex === null) return;
      const nextIndex = logIndex + 1;
      if (nextIndex >= cmdLog.length) {
        setLogIndex(null);
        setInput("");
      } else {
        setLogIndex(nextIndex);
        setInput(cmdLog[nextIndex]);
      }
    }
  }

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">bash — ~/IGMA</span>
      </div>

      <div className="terminal-body" ref={bodyRef} aria-live="polite">
        {history.map((entry, i) => (
          <div key={i}>
            {entry.command !== "" && (
              <div className="term-line">
                <span className="term-prompt">$</span> {entry.command}
              </div>
            )}
            {entry.output.map((line, j) => (
              <div className="term-out" key={j}>
                {line || "\u00A0"}
              </div>
            ))}
          </div>
        ))}

        <form className="term-line term-form" onSubmit={handleSubmit}>
          <span className="term-prompt">$</span>
          <input
            ref={inputRef}
            className="term-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
            aria-label="Escribí un comando de la terminal"
          />
        </form>
      </div>
    </div>
  );
}

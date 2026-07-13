import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import "./GithubStats.css";

export function GithubStats() {
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function fetchGithub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${profile.githubUsername}`),
          fetch(
            `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=100`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("github request failed");

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        const topRepos = reposData
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 3);

        if (!cancelled) {
          setUser(userData);
          setRepos(topRepos);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    fetchGithub();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">curl api.github.com/users/{profile.githubUsername}</span>
          <h2 className="section-title">GitHub en vivo</h2>
        </div>

        <div className="github-panel">
          {status === "loading" && <p className="github-status">consultando la API de GitHub…</p>}

          {status === "error" && (
            <p className="github-status">
              no se pudo consultar la API justo ahora. mirá el perfil directo en{" "}
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                github.com/{profile.githubUsername}
              </a>
              .
            </p>
          )}

          {status === "ready" && user && (
            <>
              <div className="github-summary">
                <div className="github-stat">
                  <span className="github-stat-value">{user.public_repos}</span>
                  <span className="github-stat-label">repos públicos</span>
                </div>
                <div className="github-stat">
                  <span className="github-stat-value">{user.followers}</span>
                  <span className="github-stat-label">seguidores</span>
                </div>
                <div className="github-stat">
                  <span className="github-stat-value">
                    {new Date(user.created_at).getFullYear()}
                  </span>
                  <span className="github-stat-label">en GitHub desde</span>
                </div>
              </div>

              {repos.length > 0 && (
                <div className="github-repos">
                  {repos.map((repo) => (
                    <a
                      className="github-repo"
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={repo.id}
                    >
                      <div className="github-repo-head">
                        <span className="github-repo-name">{repo.name}</span>
                        {repo.stargazers_count > 0 && (
                          <span className="github-repo-stars">★ {repo.stargazers_count}</span>
                        )}
                      </div>
                      {repo.description && (
                        <p className="github-repo-desc">{repo.description}</p>
                      )}
                      {repo.language && (
                        <span className="github-repo-lang">{repo.language}</span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

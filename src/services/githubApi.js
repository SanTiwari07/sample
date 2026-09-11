// Browser-safe Client-side GitHub Telemetry and Repository Data Service
// Includes seamless fallback to analyzed profile-data.json on rate limits or offline mode.

import fallbackData from '../data/profile-data.json';

const USERNAME = 'Shambhavi500';
const GITHUB_API_URL = `https://api.github.com/users/${USERNAME}`;

export class GitHubApiService {
  /**
   * Retrieves verified profile stats from live API with local fallback
   */
  static async getProfileStats() {
    try {
      const res = await fetch(GITHUB_API_URL, {
        headers: { Accept: 'application/vnd.github.v3+json' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const user = await res.json();
      return {
        publicRepos: user.public_repos || fallbackData.stats.publicRepos,
        followers: user.followers || fallbackData.stats.followers,
        following: user.following || fallbackData.stats.following,
        totalContributions: fallbackData.stats.totalContributions,
        activeDaysCount: fallbackData.stats.activeDaysCount,
        avatarUrl: user.avatar_url || fallbackData.avatarUrl
      };
    } catch {
      // Graceful fallback to verified snapshot
      return {
        publicRepos: fallbackData.stats.publicRepos,
        followers: fallbackData.stats.followers,
        following: fallbackData.stats.following,
        totalContributions: fallbackData.stats.totalContributions,
        activeDaysCount: fallbackData.stats.activeDaysCount,
        avatarUrl: fallbackData.avatarUrl
      };
    }
  }

  /**
   * Retrieves repositories ranked and formatted for display
   */
  static async getRepositories() {
    try {
      const res = await fetch(`${GITHUB_API_URL}/repos?per_page=100&sort=updated`, {
        headers: { Accept: 'application/vnd.github.v3+json' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const liveRepos = await res.json();

      if (Array.isArray(liveRepos) && liveRepos.length > 0) {
        // Exclude profile repo Shambhavi500 from project display
        const filtered = liveRepos.filter(r => r.name.toLowerCase() !== USERNAME.toLowerCase());
        
        // Match with fallback details for custom highlights
        const fallbackMap = new Map((fallbackData.projects || []).map(p => [p.name.toLowerCase(), p]));

        return filtered.map(r => {
          const matched = fallbackMap.get(r.name.toLowerCase());
          return {
            id: r.id,
            name: r.name,
            fullName: r.full_name,
            url: r.html_url,
            description: r.description || matched?.description || 'Active software repository by Shambhavi Patil.',
            highlight: matched?.highlight || null,
            language: r.language || matched?.language || 'Code',
            stars: r.stargazers_count ?? 0,
            forks: r.forks_count ?? 0,
            updatedAt: r.updated_at,
            topics: r.topics || [],
            category: matched?.category || 'SOFTWARE REPOSITORY',
            tag: matched?.tag || null,
            isAwardWinning: !!matched?.isAwardWinning
          };
        }).sort((a, b) => {
          // Prioritize award-winning and curated showcase items
          if (a.isAwardWinning && !b.isAwardWinning) return -1;
          if (!a.isAwardWinning && b.isAwardWinning) return 1;
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
      }
    } catch (err) {
      console.warn('[GitHubApiService] Using verified cached telemetry fallback:', err.message);
    }

    // Direct fallback from profile-data.json
    return (fallbackData.projects || []).map(p => ({
      id: p.name,
      name: p.name,
      fullName: p.fullName || `Shambhavi500/${p.name}`,
      url: p.url,
      description: p.description,
      highlight: p.highlight,
      language: p.language || 'Python',
      stars: p.stars || 0,
      forks: p.forks || 0,
      updatedAt: p.updatedAt,
      topics: p.readmeAnalysis?.sections || [],
      category: p.category || 'SOFTWARE REPOSITORY',
      tag: p.tag || null,
      isAwardWinning: !!p.isAwardWinning
    }));
  }
}

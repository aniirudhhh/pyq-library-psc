/**
 * Get available filter options from the data
 * @returns {Promise} - Promise resolving to filter options
 */
async function getFilterOptions() {
  try {
      const response = await fetch('data/question-papers.json');
      if (!response.ok) {
          throw new Error('Failed to fetch question papers');
      }
      const data = await response.json();
      const papers = data.questionPapers;

      const years = [...new Set(papers.map(p => p.year))].sort((a, b) => b - a);
      const subjects = [...new Set(papers.map(p => p.subject))].sort();
      const difficulties = [...new Set(papers.map(p => p.difficulty))].filter(Boolean).sort();

      return {
          years,
          subjects,
          difficulties
      };
  } catch (error) {
      console.error('Error fetching filter options:', error);
      return {
          years: [],
          subjects: [],
          difficulties: []
      };
  }
}

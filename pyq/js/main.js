// Sample data (this would normally be loaded from a JSON file or API)
const questionPapers = [
  {
    id: 1,
    title: "System Design sem-3",
    subject: "System Design",
    year: 2021,
    papercode: "CC-7",
    duration: "3 hour",
    description:
      "Detailed evaluation for students in System Design covering core topics.",
    downloadUrl: "files/ssad 2021(1).pdf",
  },
  {
    id: 2,
    title: "Mathematics",
    subject: "Mathematics",
    year: 2021,
    papercode: "GE-I",
    duration: "3 hours",
    description:
      "Final test in Mathematics, focusing on theoretical and practical knowledge.",
    downloadUrl: "files/QUESTION_BCA_2019-22_SEM3_GE3.pdf",
  },
  {
    id: 3,
    title: "Environmental Science Sem-2",
    subject: "Environmental Science",
    year: 2023,
    papercode: "AEC-2",
    duration: "3 hours",
    description:
      "Comprehensive exam on Environmental Science, as part of semester curriculum.",
    downloadUrl: "files/EN LAW.pdf",
  },
  {
    id: 4,
    title: "Java",
    subject: "Java",
    year: 2021,
    papercode: "CC-3",
    duration: "3 hours",
    description: "Assessment includes MCQs, short, and long questions in Java.",
    downloadUrl: "files/Java 2021.pdf",
  },
  {
    id: 5,
    title: "VB.NET",
    subject: "VB.NET",
    year: 2021,
    papercode: "CC-9",
    duration: "3 hours",
    description: "Exam covering all important aspects of VB.NET.",
    downloadUrl: "files/cc-09.pdf",
  },
  {
    id: 6,
    title: "Operating Systems Sem-3",
    subject: "Operating Systems",
    year: 2023,
    papercode: "CC-6",
    duration: "3 hours",
    description:
      "Final test in Operating Systems, focusing on theoretical and practical knowledge.",
    downloadUrl: "files/CC6 2023.pdf",
  },
  {
    id: 7,
    title: "Fundamentals of Computers",
    subject: "Fundamentals of Computers",
    year: 2022,
    papercode: "CC-1",
    duration: "3 hours",
    description:
      "Comprehensive exam on Fundamentals of Computers, as part of semester curriculum.",
    downloadUrl: "files/CC 1 2022.pdf",
  },
  {
    id: 8,
    title: "RDBMS Sem-4",
    subject: "RDBMS",
    year: 2022,
    papercode: "CC-10",
    duration: "3 hours",
    description:
      "Assessment includes MCQs, short, and long questions in RDBMS.",
    downloadUrl: "files/oracle 2022.pdf",
  },
  {
    id: 9,
    title: "English Sem-1",
    subject: "English",
    year: 2023,
    papercode: "AECC-I",
    duration: "2 hours",
    description:
      "Detailed evaluation for students in English covering core topics.",
    downloadUrl: "files/AECC 1 2023 English .pdf",
  },
  {
    id: 10,
    title: "Statistics Sem-3",
    subject: "Statistics",
    year: 2023,
    papercode: "GE-III",
    duration: "3 hours",
    description: "Exam covering all important aspects of Statistics.",
    downloadUrl: "files/Ge 03.pdf",
  },
  {
    id: 11,
    title: "Operating System Sem-3",
    subject: "Operating System",
    year: 2023,
    papercode: "CC-6",
    duration: "1 hour",
    description:
      "Covers process management, memory management, file system, and scheduling.",
    downloadUrl: "files/CC06.pdf",
  },
  {
    id: 12,
    title: "C Programming Sem-1",
    subject: "Programming in C",
    year: 2021,
    papercode: "CC-I",
    duration: "3 hours",
    description:
      "Comprehensive exam on C Programming, as part of semester curriculum.",
    downloadUrl: "files/C 2023.pdf",
  },
  {
    id: 13,
    title: "Networking Sem-4",
    subject: "Networking",
    year: 2024,
    papercode: "CC-8",
    duration: "3 hours",
    description: "Exam covering all important aspects of Networking.",
    downloadUrl: "files/CC 8 2024.pdf",
  },
  {
    id: 14,
    title: "Python Sem-3 (2nd)",
    subject: "Python",
    year: 2023,
    papercode: "CC-5",
    duration: "3 hours",
    description:
      "Assessment includes MCQs, short, and long questions in Python.",
    downloadUrl: "files/CC5 2023(2nd paper).pdf",
  },
  {
    id: 15,
    title: "Mathematics",
    subject: "Mathematics",
    year: 2021,
    papercode: "GE-II",
    duration: "3 hours",
    description:
      "Detailed evaluation for students in Mathematics covering core topics.",
    downloadUrl: "files/statistics 2022.pdf",
  },
  {
    id: 16,
    title: "Computer Networks Sem-4",
    subject: "Computer Networks",
    year: 2022,
    papercode: "CC-8",
    duration: "3 hours",
    description:
      "OSI and TCP/IP models, routing, switching, IP addressing, and protocols.",
    downloadUrl: "files/computer networking 2022.pdf",
  },
  {
    id: 17,
    title: "System Design (2nd)",
    subject: "System Design",
    year: 2023,
    papercode: "CC-7",
    duration: "3 hours",
    description:
      "Comprehensive exam on System Design, as part of semester curriculum.",
    downloadUrl: "files/CC07 2023(2nd paper).pdf",
  },
  {
    id: 18,
    title: "VB.NET Sem-4",
    subject: "VB.NET",
    year: 2022,
    papercode: "CC-9",
    duration: "3 hours",
    description:
      "Final test in VB.NET, focusing on theoretical and practical knowledge.",
    downloadUrl: "files/vb.net 2022.pdf",
  },
  {
    id: 19,
    title: "Operating Systems Sem-3",
    subject: "Operating Systems",
    year: 2021,
    papercode: "CC-6",
    duration: "3 hours",
    description:
      "Assessment includes MCQs, short, and long questions in Operating Systems.",
    downloadUrl: "files/OS 2021.pdf",
  },
  {
    id: 20,
    title: "System Analysis and Design Sem-3",
    subject: "SSAD",
    year: 2022,
    papercode: "CC-7",
    duration: "3 hours",
    description:
      "Focuses on SDLC, DFDs, ERDs, feasibility study, and project planning.",
    downloadUrl: "#",
  },
  {
    id: 21,
    title: "RDBMS",
    subject: "RDBMS",
    year: 2022,
    papercode: "CC-10",
    duration: "3 hour",
    description:
      "Detailed evaluation for students in RDBMS covering core topics.",
    downloadUrl: "#",
  },
  {
    id: 22,
    title: "Statistics",
    subject: "Statistics",
    year: 2022,
    papercode: "AECC-II",
    duration: "3 hours",
    description: "Exam covering all important aspects of Statistics.",
    downloadUrl: "#",
  },
  {
    id: 23,
    title: "Environmental Science",
    subject: "Environmental Science",
    year: 2022,
    papercode: "AEC-2",
    duration: "3 hours",
    description:
      "Comprehensive exam on Environmental Science, as part of semester curriculum.",
    downloadUrl: "files/sec 2. 2022.pdf",
  },
  {
    id: 24,
    title: "Fundamentals of Computers",
    subject: "Fundamentals of Computers",
    year: 2022,
    papercode: "CC-1",
    duration: "3 hours",
    description:
      "Comprehensive exam on Fundamentals of Computers, as part of semester curriculum.",
    downloadUrl: "files/Fundamental 2023.pdf",
  },
  {
    id: 25,
    title: "Java Sem-2",
    subject: "Java",
    year: 2021,
    papercode: "CC-3",
    duration: "3 hours",
    description: "Assessment includes MCQs, short, and long questions in Java.",
    downloadUrl: "#",
  },
  {
    id: 26,
    title: "Architecture Sem-2",
    subject: "Architecture",
    year: 2024,
    papercode: "CC-4",
    duration: "3 hours",
    description:
      "Comprehensive exam on Architecture, as part of semester curriculum.",
    downloadUrl: "#",
  },
  {
    id: 27,
    title: "Architecture Sem-2",
    subject: "Architecture",
    year: 2022,
    papercode: "CC-4",
    duration: "3 hours",
    description:
      "Comprehensive exam on Architecture, as part of semester curriculum.",
    downloadUrl: "#",
  },
];

// DOM elements
const yearFilter = document.getElementById("year-filter");
const subjectFilter = document.getElementById("subject-filter");
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navList = document.querySelector("nav ul");

const h1 = document.getElementById("animate-heading");
const text = h1.textContent;
h1.innerHTML = "";

// Mobile menu toggle
mobileMenuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Filter and render questions
function filterAndRenderQuestions() {
  const selectedYear = yearFilter.value;
  const selectedSubject = subjectFilter.value;
  const searchTerm = searchInput.value.toLowerCase();

  // Show loading state
  resultsContainer.innerHTML = `
          <div class="loading">
              <div class="loading-spinner"></div>
          </div>
      `;
  resultsContainer.classList.remove("active");

  // Simulate loading delay for transition effect
  setTimeout(() => {
    // Filter questions
    let filteredQuestions = questionPapers;

    if (selectedYear) {
      filteredQuestions = filteredQuestions.filter(
        (paper) => paper.year === parseInt(selectedYear)
      );
    }

    if (selectedSubject) {
      filteredQuestions = filteredQuestions.filter(
        (paper) => paper.subject === selectedSubject
      );
    }

    if (searchTerm) {
      filteredQuestions = filteredQuestions.filter(
        (paper) =>
          paper.title.toLowerCase().includes(searchTerm) ||
          paper.description.toLowerCase().includes(searchTerm) ||
          paper.subject.toLowerCase().includes(searchTerm)
      );
    }

    // Render results
    if (filteredQuestions.length === 0) {
      resultsContainer.innerHTML = `
                  <div class="empty-state">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      <h2>No questions found</h2>
                      <p>Try adjusting your filters or search term</p>
                      <button class="btn" onclick="resetFilters()">Reset Filters</button>
                  </div>
              `;
    } else {
      let resultsHTML = '<div class="results">';

      filteredQuestions.forEach((paper, index) => {
        resultsHTML += `
                      <div class="card" style="animation: fadeInUp ${
                        0.2 + index * 0.05
                      }s forwards">
                          <div class="card-badge">${paper.year}</div>
                          <div class="card-content">
                              <h3 class="card-title">${paper.title}</h3>
                              <div class="card-meta">
                                  <div class="card-meta-item">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                      </svg>
                                      ${paper.subject}
                                  </div>
                                  <div class="card-meta-item">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <polyline points="12 6 12 12 16 14"></polyline>
                                      </svg>
                                      ${paper.duration}
                                  </div>
                                  <div class="card-meta-item">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                          <polyline points="14 2 14 8 20 8"></polyline>
                                          <line x1="16" y1="13" x2="8" y2="13"></line>
                                          <line x1="16" y1="17" x2="8" y2="17"></line>
                                          <polyline points="10 9 9 9 8 9"></polyline>
                                      </svg>
                                      ${paper.papercode}
                                  </div>
                              </div>
                              <p class="card-description">${
                                paper.description
                              }</p>
                              <div class="card-actions">
                                  <a href="${
                                    paper.downloadUrl
                                  }" class="btn" download target="_blank">Download PDF</a>
                                  <button class="btn btn-secondary" onclick="previewPaper(${
                                    paper.id
                                  })">Preview</button>
                              </div>
                          </div>
                      </div>
                  `;
      });

      resultsHTML += "</div>";
      resultsContainer.innerHTML = resultsHTML;
    }

    // Trigger transition
    setTimeout(() => {
      resultsContainer.classList.add("active");
    }, 50);
  }, 600); // Simulate API delay
}

// Reset all filters
function resetFilters() {
  yearFilter.value = "";
  subjectFilter.value = "";
  searchInput.value = "";
  filterAndRenderQuestions();
}

// Preview paper (placeholder)
// function previewPaper(id) {
//     const paper = questionPapers.find(p => p.id === id);
//     alert(`Preview for ${paper.title} (${paper.year}) coming soon!`);
// }

// function previewPaper(id) {
//   const paper = questionPapers.find((p) => p.id === id);
//   const pdfFrame = document.getElementById("pdf-frame");
//   const previewModal = document.getElementById("preview-modal");

//   if (paper && paper.downloadUrl.endsWith(".pdf")) {
//     pdfFrame.src = paper.downloadUrl;
//     previewModal.classList.add("show");
//   } else {
//     alert("PDF not available or invalid URL.");
//   }
// }

function previewPaper(id) {
  const paper = questionPapers.find((p) => p.id === id);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const previewBtn = document.getElementById("preview-btn"); // Assuming the preview button has an ID

  if (paper && paper.downloadUrl.endsWith(".pdf")) {
    if (isMobile) {
      // Disable the preview button and show an alert on mobile
      previewBtn.disabled = true;
      alert("This feature is only available on desktop.");
    } else {
      // Show modal preview on desktop
      const pdfFrame = document.getElementById("pdf-frame");
      const previewModal = document.getElementById("preview-modal");
      pdfFrame.src = paper.downloadUrl;
      previewModal.classList.add("show");
    }
  } else {
    alert("Invalid or missing PDF file.");
  }
}

function closeModal() {
  const previewModal = document.getElementById("preview-modal");
  const pdfFrame = document.getElementById("pdf-frame");
  previewModal.classList.remove("show");
  pdfFrame.src = ""; // clear the PDF for cleanup
}

// Event listeners
yearFilter.addEventListener("change", filterAndRenderQuestions);
subjectFilter.addEventListener("change", filterAndRenderQuestions);
searchInput.addEventListener("input", filterAndRenderQuestions);

// Initial render
window.addEventListener("load", () => {
  filterAndRenderQuestions();
});

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  alert("Right-click is disabled on this website! 😣");
});

document.addEventListener("keydown", function (event) {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key === "I")
  ) {
    event.preventDefault();
    alert("Sorry Bruh! 😣 Developer tools are disabled on this site.");
  }
});

[...text].forEach((letter) => {
  const span = document.createElement("span");
  span.innerHTML = letter === " " ? "&nbsp;" : letter;
  h1.appendChild(span);
});

gsap.to("#animate-heading span", {
  y: 0,
  opacity: 1,
  duration: 0.3,
  stagger: 0.05,
  ease: "power2.out",
});

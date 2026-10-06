let currentPage = 'home';
let previousPage = '';

function showPage(pageId) {
  document.getElementById(currentPage).classList.add('hidden');
  hideAllProjectDetails();
  document.getElementById(pageId).classList.remove('hidden');
  previousPage = currentPage;
  currentPage = pageId;
}

function goBack() {
  if (previousPage) {
    showPage(previousPage);
  }
}

function showProjectDetail(projectNum) {
  hideAllProjectDetails();
  document.getElementById(`project-detail-${projectNum}`).classList.remove('hidden');
}

function hideAllProjectDetails() {
  for (let i = 1; i <= 7; i++) {
    const detail = document.getElementById(`project-detail-${i}`);
    if (detail) detail.classList.add('hidden');
  }
}

function showPortfolioTab(tab) {
  document.getElementById('projects-tab').classList.add('hidden');
  document.getElementById('research-tab').classList.add('hidden');
  document.getElementById('organizations-tab').classList.add('hidden');
  document.getElementById('experience-tab').classList.add('hidden');
  document.getElementById(`${tab}-tab`).classList.remove('hidden');
  hideAllProjectDetails();
}

function showResearchContent(tabId) {
  const sections = document.querySelectorAll('.research-content');
  sections.forEach(section => section.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
}

function toggleContactForm() {
  const formContainer = document.getElementById('contactFormContainer');
  const btn = document.querySelector('.contact-btn');
  if (formContainer.classList.contains('hidden')) {
    formContainer.classList.remove('hidden');
    btn.textContent = 'Close Contact Form';
  } else {
    formContainer.classList.add('hidden');
    btn.textContent = 'Open Contact Form';
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  alert('Thank you for your message! Your form has been submitted.');
  document.getElementById('contactFormContainer').classList.add('hidden');
  document.querySelector('.contact-btn').textContent = 'Open Contact Form';
  event.target.reset();
}
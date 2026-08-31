function toggleMenu() {
  const m = document.getElementById('mobile-nav');
  if (m) m.style.display = m.style.display === 'block' ? 'none' : 'block';
}
function showContactModal() {
  const m = document.getElementById('contact-modal');
  if (m) m.classList.add('open');
}
function hideContactModal() {
  const m = document.getElementById('contact-modal');
  if (m) m.classList.remove('open');
}
function sendToWhatsApp() {
  const name = (document.getElementById('wa-name') || {}).value || '';
  const email = (document.getElementById('wa-email') || {}).value || '';
  const org = (document.getElementById('wa-org') || {}).value || '';
  const interest = (document.getElementById('wa-interest') || {}).value || '';
  const message = (document.getElementById('wa-message') || {}).value || '';
  if (!name.trim() || !message.trim()) {
    alert('Please enter your name and message');
    return;
  }
  let text = 'Hello AlgoLex,%0A%0AName: ' + encodeURIComponent(name.trim()) + '%0A';
  if (email.trim()) text += 'Email: ' + encodeURIComponent(email.trim()) + '%0A';
  if (org.trim()) text += 'Organization: ' + encodeURIComponent(org.trim()) + '%0A';
  if (interest) text += 'Interested in: ' + encodeURIComponent(interest) + '%0A';
  text += 'Message: ' + encodeURIComponent(message.trim());
  window.open('https://wa.me/918072940943?text=' + text, '_blank');
  hideContactModal();
}
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'contact-modal') hideContactModal();
});

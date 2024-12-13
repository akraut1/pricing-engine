document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('[data-feathery-id="container-page"]');
  const trigger = document.getElementById('combobox-trigger');
  const content = document.getElementById('combobox-content');
  const input = document.querySelector('.combobox-input');
  const options = document.querySelectorAll('.combobox-option');
  const selectedValue = document.getElementById('selected-value');

  let currentTheme = 'light';

  function toggleContent() {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', !isExpanded);
    content.style.display = isExpanded ? 'none' : 'block';
  }

  function applyTheme(theme) {
    container.classList.toggle('dark', theme === 'dark');
    
    /* Apply theme to all nested elements */
    container.querySelectorAll('*').forEach(el => {
      el.classList.toggle('dark', theme === 'dark');
    });

    /* If Feathery uses shadow DOM, traverse it */
    container.querySelectorAll('*').forEach(el => {
      if (el.shadowRoot) {
        el.shadowRoot.querySelectorAll('*').forEach(shadowEl => {
          shadowEl.classList.toggle('dark', theme === 'dark');
        });
      }
    });
  }

  function selectOption(option) {
    const value = option.dataset.value;
    selectedValue.textContent = option.querySelector('span').textContent;
    options.forEach(opt => opt.setAttribute('aria-selected', 'false'));
    option.setAttribute('aria-selected', 'true');
    toggleContent();

    if (value !== currentTheme) {
      currentTheme = value;
      applyTheme(currentTheme);
    }
  }

  trigger.addEventListener('click', toggleContent);

  input.addEventListener('input', () => {
    const filter = input.value.toLowerCase();
    options.forEach(option => {
      const text = option.textContent.toLowerCase();
      option.style.display = text.includes(filter) ? '' : 'none';
    });
  });

  options.forEach(option => {
    option.addEventListener('click', () => selectOption(option));
  });

  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !content.contains(e.target)) {
      content.style.display = 'none';
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
});

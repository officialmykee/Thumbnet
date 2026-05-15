// story.js
export function renderStories() {
  const container = document.getElementById('storiesContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="story-item">
      <div class="story-avatar-wrap">
        <div class="story-photo">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
            <rect width="64" height="64" fill="#2a2a2a"/>
            <ellipse cx="32" cy="50" rx="19" ry="14" fill="#444"/>
            <circle cx="32" cy="24" r="13" fill="#555"/>
          </svg>
        </div>
        <div class="story-plus-badge"></div>
      </div>
      <span class="story-label">Story</span>
    </div>

    <div class="story-item">
      <div class="story-avatar-wrap"><div class="story-ring"></div>
        <div class="story-photo"><img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Maria"/></div>
      </div>
      <span class="story-label">Maria</span>
    </div>

    <div class="story-item">
      <div class="story-avatar-wrap"><div class="story-ring"></div>
        <div class="story-photo"><img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Roman"/></div>
      </div>
      <span class="story-label">Roman</span>
    </div>

    <div class="story-item">
      <div class="story-avatar-wrap"><div class="story-ring"></div>
        <div class="story-photo"><img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex"/></div>
      </div>
      <span class="story-label">Alex</span>
    </div>
  `;
}

renderStories();

// post.js
const postCSS = `
  .post-card {
    background: #fff; width: 100%; border-bottom: 8px solid #f0f2f5;
    border-radius: 18px; margin: 0 0 8px 0; overflow: hidden;
  }
  .pc-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px 10px; }
  .pc-user-info { display: flex; align-items: center; gap: 10px; }
  .pc-avatar { width: 36px; height: 36px; border-radius: 50%; overflow: hidden; }
  .pc-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .pc-name { font-size: 14px; font-weight: 700; color: #1a1a2e; }
  .pc-location { font-size: 12px; color: #aaa; }
  .pc-carousel-wrap { position: relative; }
  .pc-carousel { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; }
  .pc-carousel::-webkit-scrollbar { display: none; }
  .pc-carousel-slide { flex-shrink: 0; width: 100%; height: 430px; }
  .pc-carousel-slide img { width: 100%; height: 100%; object-fit: cover; }
  .pc-carousel-counter { position: absolute; top: 10px; right: 12px; background: rgba(0,0,0,0.5); color: #fff; font-size: 13px; padding: 3px 9px; border-radius: 20px; }
  .pc-caption { padding: 12px 16px 6px; font-size: 14.5px; line-height: 1.55; color: #1a1a2e; }
  .pc-actions { display: flex; align-items: center; justify-content: space-between; padding: 8px 16px 14px; }
  .pc-action-btn { background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 5px; color: #777; font-weight: 600; }
`;

const style = document.createElement('style');
style.textContent = postCSS;
document.head.appendChild(style);

export function renderPosts() {
  const container = document.getElementById('postsContainer');
  if (!container) return;

  const postHTML = `
    <div class="post-card">
      <div class="pc-header">
        <div class="pc-user-info">
          <div class="pc-avatar"><img src="https://picsum.photos/seed/roman/100/100" alt="Roman"/></div>
          <div>
            <div class="pc-name">Roman Petrov</div>
            <div class="pc-location">1 May 2026</div>
          </div>
        </div>
        <div class="pc-dots">···</div>
      </div>
      <div class="pc-carousel-wrap">
        <div class="pc-carousel">
          <div class="pc-carousel-slide"><img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" alt="mountain"/></div>
        </div>
        <div class="pc-carousel-counter">1 / 1</div>
      </div>
      <div class="pc-caption">Weekend escape to the mountains 🏔️ pure air, pure soul.</div>
      <div class="pc-actions">
        <button class="pc-action-btn like-btn" data-liked="false">❤️ <span class="like-label">Like</span></button>
        <button class="pc-action-btn">💬 Comment</button>
        <div class="pc-date">1 May 2026</div>
      </div>
    </div>
  `;

  container.innerHTML = postHTML;

  // Like button
  container.querySelector('.like-btn').addEventListener('click', function() {
    const liked = this.dataset.liked === 'true';
    this.dataset.liked = !liked;
    this.style.color = !liked ? '#e8315a' : '#777';
    this.querySelector('.like-label').textContent = !liked ? 'Liked' : 'Like';
  });
}

renderPosts();

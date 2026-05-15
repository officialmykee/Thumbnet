// post.js
const styles = document.createElement('style');
styles.textContent = `
  .post-card { background:#fff; border-bottom:8px solid #f0f2f5; border-radius:18px; margin-bottom:8px; overflow:hidden; }
  .pc-header { display:flex; align-items:center; justify-content:space-between; padding:14px 16px 10px; }
  .pc-avatar { width:36px; height:36px; border-radius:50%; overflow:hidden; }
  .pc-name { font-weight:700; font-size:14px; }
  .pc-location { font-size:12px; color:#aaa; }
  .pc-carousel { display:flex; overflow-x:auto; scroll-snap-type:x mandatory; }
  .pc-carousel::-webkit-scrollbar { display:none; }
  .pc-carousel-slide { flex-shrink:0; width:100%; height:380px; }
  .pc-carousel-slide img { width:100%; height:100%; object-fit:cover; }
  .pc-caption { padding:12px 16px; font-size:14.5px; line-height:1.5; }
  .pc-actions { padding:8px 16px 14px; display:flex; justify-content:space-between; align-items:center; }
  .pc-action-btn { background:none; border:none; display:flex; align-items:center; gap:6px; font-size:14px; color:#555; cursor:pointer; }
`;
document.head.appendChild(styles);

export function renderPosts() {
  const container = document.getElementById('postsContainer');

  const post = `
    <div class="post-card">
      <div class="pc-header">
        <div style="display:flex;gap:10px;align-items:center;">
          <div class="pc-avatar">
            <img src="https://picsum.photos/seed/roman/100/100" alt="">
          </div>
          <div>
            <div class="pc-name">Roman Petrov</div>
            <div class="pc-location">1 May 2026</div>
          </div>
        </div>
        <div style="color:#aaa;font-size:22px;">···</div>
      </div>

      <div style="position:relative;">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" style="width:100%;height:380px;object-fit:cover;">
      </div>

      <div class="pc-caption">Weekend escape to the mountains 🏔️ pure air, pure soul.</div>

      <div class="pc-actions">
        <button class="pc-action-btn like-btn" data-liked="false">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span class="like-label">Like</span>
        </button>

        <button class="pc-action-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5C21 16.5 16.97 20 12 20C10.5 20 9.1 19.7 7.9 19L3 21L5 16.5C3.8 15 3 13 3 11.5C3 6.5 7.03 3 12 3C16.97 3 21 6.5 21 11.5Z" stroke="#777" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          <span>Comment</span>
        </button>

        <div style="color:#aaa;font-size:12.5px;">1 May 2026</div>
      </div>
    </div>
  `;

  container.innerHTML = post;

  // Like Button
  container.querySelector('.like-btn').addEventListener('click', function() {
    const liked = this.dataset.liked === 'true';
    this.dataset.liked = !liked;
    this.style.color = !liked ? '#e8315a' : '#555';
    this.querySelector('.like-label').textContent = !liked ? 'Liked' : 'Like';
  });
}

renderPosts();

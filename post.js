// post.js
const samplePosts = [
  {
    type: 'carousel',
    user: { name: "Roman Petrov", avatar: "https://picsum.photos/seed/roman/100/100", time: "1 May 2025" },
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80"
    ],
    caption: "Weekend escape to the mountains 🏔️ pure air, pure soul."
  },
  {
    type: 'video',
    user: { name: "Sunday Paperplane", avatar: "https://picsum.photos/seed/sunday/100/100", time: "9 May 2026" },
    thumbnail: "https://picsum.photos/seed/videothumb/800/440",
    duration: "0:59",
    caption: "Check out the latest drop 🌐✈️ #SundayPaperplane"
  }
];

function createPostElement(post) {
  const div = document.createElement('div');
  div.className = 'post-card';

  let mediaHTML = '';

  if (post.type === 'carousel') {
    let slides = '';
    post.images.forEach(img => {
      slides += `<div class="pc-carousel-slide"><img src="${img}" alt="post"/></div>`;
    });

    mediaHTML = `
      <div class="pc-carousel-wrap">
        <div class="pc-carousel">${slides}</div>
        <div class="pc-carousel-counter">1 / ${post.images.length}</div>
      </div>
    `;
  } else if (post.type === 'video') {
    mediaHTML = `
      <div style="position:relative;width:100%;height:220px;overflow:hidden;">
        <img src="${post.thumbnail}" style="width:100%;height:100%;object-fit:cover;display:block;" />
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.15);">
          <div style="width:48px;height:48px;border-radius:50%;border:2.5px solid rgba(255,255,255,0.85);display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.35);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
        </div>
        <div style="position:absolute;bottom:8px;right:10px;background:rgba(0,0,0,0.6);color:#fff;font-size:12px;font-weight:600;padding:2px 7px;border-radius:4px;">${post.duration}</div>
      </div>
    `;
  }

  div.innerHTML = `
    <div class="pc-header">
      <div class="pc-user-info">
        <div class="pc-avatar"><img src="\( {post.user.avatar}" alt=" \){post.user.name}"/></div>
        <div class="pc-name-location">
          <div class="pc-name">${post.user.name}</div>
          <div class="pc-location">${post.user.time}</div>
        </div>
      </div>
      <div class="pc-dots">···</div>
    </div>
    ${mediaHTML}
    <div class="pc-caption">${post.caption}</div>
    <div class="pc-actions">
      <div class="pc-action-group">
        <div style="background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.10);padding:8px 16px;display:inline-flex;align-items:center;">
          <button class="pc-action-btn like-btn" data-liked="false">
            <svg class="heart-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span class="like-label" style="color:#aaa;font-weight:600;font-size:13px;margin-left:4px;">Like</span>
          </button>
        </div>
      </div>
      <div style="background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.10);padding:8px 16px;display:inline-flex;align-items:center;">
        <button class="pc-action-btn"><span style="color:#aaa; font-weight:600; font-size:13px;">Comment</span></button>
      </div>
      <div class="pc-date">${post.user.time}</div>
    </div>
  `;

  // Like functionality
  const likeBtn = div.querySelector('.like-btn');
  if (likeBtn) {
    likeBtn.addEventListener('click', function() {
      const liked = this.dataset.liked === 'true';
      const heart = this.querySelector('.heart-svg');
      const label = this.querySelector('.like-label');
      if (!liked) {
        this.dataset.liked = 'true';
        heart.setAttribute('fill', '#e8315a');
        heart.setAttribute('stroke', '#e8315a');
        label.style.color = '#e8315a';
        label.textContent = 'Liked';
      } else {
        this.dataset.liked = 'false';
        heart.setAttribute('fill', 'none');
        heart.setAttribute('stroke', '#aaa');
        label.style.color = '#aaa';
        label.textContent = 'Like';
      }
    });
  }

  return div;
}

export function renderPosts() {
  const container = document.getElementById('postsContainer');
  if (!container) return;

  samplePosts.forEach(post => {
    container.appendChild(createPostElement(post));
  });
}

// Auto render on import
renderPosts();

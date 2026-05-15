// post.js
const samplePosts = [ /* same as before */ ];

function createPostElement(post) {
  const div = document.createElement('div');
  div.className = 'post-card';

  let mediaHTML = '';

  if (post.type === 'carousel') {
    let slides = post.images.map(src => 
      `<div class="pc-carousel-slide"><img src="${src}" alt="post image"/></div>`
    ).join('');

    mediaHTML = `
      <div class="pc-carousel-wrap">
        <div class="pc-carousel" style="scroll-snap-type:x mandatory;">${slides}</div>
        <div class="pc-carousel-counter">1 / ${post.images.length}</div>
      </div>
    `;
  } else if (post.type === 'video') {
    mediaHTML = `
      <div style="position:relative;width:100%;height:220px;overflow:hidden;">
        <img src="${post.thumbnail}" style="width:100%;height:100%;object-fit:cover;"/>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.2);">
          <div style="width:52px;height:52px;border-radius:50%;border:3px solid rgba(255,255,255,0.9);display:flex;align-items:center;justify-content:center;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
        </div>
      </div>
    `;
  }

  div.innerHTML = `
    <div class="pc-header">
      <div class="pc-user-info">
        <div class="pc-avatar"><img src="\( {post.user.avatar}" alt=" \){post.user.name}"/></div>
        <div>
          <div class="pc-name">${post.user.name}</div>
          <div class="pc-location">${post.user.time}</div>
        </div>
      </div>
      <div class="pc-dots">···</div>
    </div>
    ${mediaHTML}
    <div class="pc-caption">${post.caption}</div>
    <div class="pc-actions">
      <button class="pc-action-btn like-btn" data-liked="false">
        ❤️ <span class="like-label">Like</span>
      </button>
      <button class="pc-action-btn">💬 Comment</button>
      <div class="pc-date">${post.user.time}</div>
    </div>
  `;

  // Like button
  div.querySelector('.like-btn').addEventListener('click', function() {
    const liked = this.dataset.liked === 'true';
    this.dataset.liked = !liked;
    this.style.color = !liked ? '#e8315a' : '#777';
    this.querySelector('.like-label').textContent = !liked ? 'Liked' : 'Like';
  });

  return div;
}

export function renderPosts() {
  const container = document.getElementById('postsContainer');
  if (!container) return;

  const postsData = [
    {
      type: 'carousel',
      user: { name: "Roman Petrov", avatar: "https://picsum.photos/seed/roman/100/100", time: "1 May 2026" },
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
      ],
      caption: "Weekend escape to the mountains 🏔️"
    }
  ];

  postsData.forEach(post => {
    container.appendChild(createPostElement(post));
  });
}

renderPosts();

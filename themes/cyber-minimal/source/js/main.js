// Cyber Minimal Theme JavaScript
// 简约+赛博朋克风格交互效果

document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Cyber Minimal Theme Loaded');
  
  // 1. 鼠标移动光效
  initMouseGlow();
  
  // 2. 滚动动画
  initScrollAnimations();
  
  // 3. 代码块复制功能
  initCodeCopy();
  
  // 4. 搜索功能增强
  initSearch();
  
  // 5. 主题切换（预留）
  initThemeToggle();
});

// 鼠标移动光效
function initMouseGlow() {
  const body = document.querySelector('.cyber-body');
  const glow = document.createElement('div');
  glow.className = 'mouse-glow';
  glow.style.cssText = `
    position: fixed;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(0, 255, 157, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;
    opacity: 0;
  `;
  body.appendChild(glow);
  
  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.style.opacity = '1';
  });
  
  function animate() {
    // 缓动效果
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  // 鼠标离开时隐藏
  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });
}

// 滚动动画
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('cyber-visible');
        
        // 为文章卡片添加特殊动画
        if (entry.target.classList.contains('post-card')) {
          setTimeout(() => {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
          }, 100);
        }
      }
    });
  }, observerOptions);
  
  // 观察所有文章卡片和部件
  document.querySelectorAll('.post-card, .widget').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// 代码块复制功能
function initCodeCopy() {
  document.querySelectorAll('pre').forEach(pre => {
    // 添加复制按钮
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.title = '复制代码';
    copyBtn.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(0, 255, 157, 0.1);
      border: 1px solid #00ff9d;
      color: #00ff9d;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      transition: all 0.3s ease;
      z-index: 10;
    `;
    
    copyBtn.addEventListener('mouseenter', () => {
      copyBtn.style.background = 'rgba(0, 255, 157, 0.2)';
      copyBtn.style.boxShadow = '0 0 10px rgba(0, 255, 157, 0.3)';
    });
    
    copyBtn.addEventListener('mouseleave', () => {
      copyBtn.style.background = 'rgba(0, 255, 157, 0.1)';
      copyBtn.style.boxShadow = 'none';
    });
    
    copyBtn.addEventListener('click', async () => {
      const code = pre.querySelector('code')?.innerText || pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        
        // 显示成功提示
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> 已复制';
        copyBtn.style.background = 'rgba(0, 255, 157, 0.3)';
        copyBtn.style.borderColor = '#00ff9d';
        
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
          copyBtn.style.background = 'rgba(0, 255, 157, 0.1)';
        }, 2000);
      } catch (err) {
        console.error('复制失败:', err);
        copyBtn.innerHTML = '<i class="fas fa-times"></i> 失败';
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
        }, 2000);
      }
    });
    
    pre.style.position = 'relative';
    pre.appendChild(copyBtn);
  });
}

// 搜索功能增强
function initSearch() {
  const searchInput = document.querySelector('.search-input');
  if (!searchInput) return;
  
  searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.3)';
  });
  
  searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.boxShadow = 'none';
  });
  
  // 输入时添加光效
  searchInput.addEventListener('input', (e) => {
    if (e.target.value.length > 0) {
      searchInput.style.boxShadow = '0 0 15px rgba(0, 255, 157, 0.2)';
    } else {
      searchInput.style.boxShadow = 'none';
    }
  });
}

// 主题切换（预留功能）
function initThemeToggle() {
  // 这里可以添加明暗主题切换功能
  // 目前使用暗色赛博朋克主题
}

// 工具函数：节流
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 工具函数：防抖
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// 添加全局样式
const style = document.createElement('style');
style.textContent = `
  .cyber-visible {
    animation: cyberFadeIn 0.8s ease forwards;
  }
  
  @keyframes cyberFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* 链接悬停效果 */
  a {
    position: relative;
    text-decoration: none;
  }
  
  a:not(.nav-item a):not(.read-more):hover {
    color: var(--primary) !important;
  }
  
  a:not(.nav-item a):not(.read-more)::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--primary);
    transition: width 0.3s ease;
  }
  
  a:not(.nav-item a):not(.read-more):hover::after {
    width: 100%;
  }
`;
document.head.appendChild(style);
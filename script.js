gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo div", {
  opacity: 0,
  delay: 1,
  x: 20,
});

const menu_items = document.querySelector(".menu_items");
gsap.from(menu_items.children, {
  opacity: 0,
  x: 0,
  duration: 1,
  delay: 1.5,
  stagger: {
    amount: 1,
  },
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menu_items.classList.toggle("open");
    // toggle a backdrop to catch outside clicks (created dynamically)
    let backdrop = document.querySelector(".menu-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "menu-backdrop";
      document.body.appendChild(backdrop);
    }
    backdrop.classList.toggle("show", menu_items.classList.contains("open"));
  });
}

// Close menu when clicking outside or when a nav link is clicked
document.addEventListener("click", (e) => {
  const target = e.target;
  const isInsideMenu =
    menu_items.contains(target) || (menuToggle && menuToggle.contains(target));
  const backdrop = document.querySelector(".menu-backdrop");
  if (!isInsideMenu && menu_items.classList.contains("open")) {
    menu_items.classList.remove("open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    if (backdrop) backdrop.classList.remove("show");
  }
});

// Close menu when any menu link is clicked (for single-page nav)
menu_items.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (menu_items.classList.contains("open")) {
      menu_items.classList.remove("open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
      const backdrop = document.querySelector(".menu-backdrop");
      if (backdrop) backdrop.classList.remove("show");
    }
  });
});

// Debug toggle: add .debug-overflow to body when URL has ?debug=overflow
(function(){
  try{
    const params = new URLSearchParams(window.location.search);
    if(params.get('debug') === 'overflow'){
      document.body.classList.add('debug-overflow');
      console.info('debug-overflow enabled via URL param');
    }
  }catch(e){/* ignore in older browsers */}

  // Keyboard toggle for convenience: Ctrl+Shift+D toggles debug outline
  document.addEventListener('keydown', (e)=>{
    if(e.ctrlKey && e.shiftKey && (e.key === 'D' || e.key === 'd')){
      document.body.classList.toggle('debug-overflow');
      console.info('Toggled debug-overflow:', document.body.classList.contains('debug-overflow'));
    }
  });
})();

gsap.utils.toArray(".star").forEach((star) => {
  gsap.fromTo(
    star,
    {
      rotation: 450,
      opacity: 0,
      y: 100,
    },
    {
      rotation: 0,
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1.5,
      scrollTrigger: star,
    }
  );
});

gsap.utils.toArray(".title").forEach((title) => {
  gsap.fromTo(
    title,
    {
      letterSpacing: "10px",
      opacity: 0,
      x: 300,
      skewX: 65,
    },
    {
      letterSpacing: "0",
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: title,
    }
  );
});

gsap.utils.toArray("p").forEach((p) => {
  gsap.fromTo(
    p,
    {
      opacity: 0,
      x: 150,
      skewX: 30,
    },
    {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: p,
    }
  );
});
gsap.utils.toArray("button").forEach((button) => {
  gsap.fromTo(
    button,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: button,
    }
  );
});

gsap.from(".pyramid", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 0.5,
});

gsap.fromTo(
  ".hand",
  {
    scale: 2,
    opacity: 0,
    skewY: 30,
  },
  {
    scale: 1,
    opacity: 1,
    skewY: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: ".hand",
  }
);

gsap.utils.toArray(".line").forEach((line) => {
  gsap.fromTo(
    line,
    {
      opacity: 0,
      width: "0%",
    },
    {
      opacity: 1,
      width: "100%",
      duration: 1,
      delay: 1,
      scrollTrigger: line,
    }
  );
});
gsap.utils.toArray(".rotation").forEach((rotate) => {
  gsap.fromTo(
    rotate,
    {
      opacity: 0,
      rotation: 350,
      scale: 0.2,
    },
    {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: rotate,
    }
  );
});
gsap.fromTo(
  ".card",
  {
    opacity: 0,
    scale: 0.1,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.5,
    stagger: {
      amount: 1,
    },
    scrollTrigger: ".card",
  }
);

const menu = document.querySelector(".menu");

gsap.from(menu.children, {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.5,
  stagger: {
    amount: 1,
  },
  scrollTrigger: {
    trigger: menu.children,
  },
});
// end of file

export function Header() {
  return `
    <header class="header header-desktop">
      <div class="header__container container">
        <div class="header__inner">
          <div class="header__burger-wrap">
                <button class="header__burger">
                       <img src="./src/images/header/burger.svg" alt="icon burger">
                </button>

                <div class="header__burger-conent">
                    <nav class="header__burger-nav">
                        <ul class="header__burger-list">
                        <li class="header__burger-item">
                            <p class="header__burger-">Акции</p>
                            <button>
                            <span></span>
                            <span></span>
                            </button>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
              <input type="text">
            </div>

            <div>
                <img src="./src/images/header/percentage.svg" alt="icon burger">
            </div>

            <div>
                <button>
                    <img src="./src/images/header/shopping_bag.svg" alt="icon burger">
                </button>
          </div>
        </div>
      </div>
    </header>
  `;
}

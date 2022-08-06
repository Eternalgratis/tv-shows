const innerHTML = `
    <header>
      <nav>
        <div class="logo">
          <a>
            <!--ticket logo-->
            <i class="fa-solid fa-ticket"></i>
            <p class="text-logo">TV MAX</p>
          </a>
        </div>
        <ul class="links">
          <li><a href="#homepage">About Us</a></li>
          <li><a href="#homepage">Most Watched</a></li>
          <li><a href="#homepage">Download</a></li>
        </ul>
      </nav>
    </header>

    <form action="#" class="search-form">
      <div class="search-box">
        <input type="text" placeholder="Search..." class="search-input" />
        <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>

    <div class="title" id="homepage">
      <h1>TV MAX</h1>
      <p class="secondary-text">
        Would you like to watch some tv shows? Here you can see all the best TV series!
        Add your likes and comments!
      </p>
      <p class="item-counter-container">We have more than <span class="item-counter"></span> shows for you!</p>
    </div>

    <div class="grid-container">
      <!--Created dynamically with javascript-->
    </div>
    <div class="modal"></div>
    <footer class="footer">
      <p>Created By Daniel Galindo and Titi as part of Microverse Bootcamp curriculum</p>
    </footer>
`;

export default innerHTML;
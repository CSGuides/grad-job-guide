
<div class="grid-container">
  <div class="grid-x grid-padding-x">
    <div class="cell">
      <input type="text" id="search" placeholder="Search...">
    </div>
  </div>

  <div class="grid-x grid-padding-x">
    <div class="cell">
      <div id="tagContainer"></div>
    </div>
  </div>

  <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3" id="peopleContent">
    <!-- Dynamic Content -->
  </div>
</div>

<!-- Modal for Detailed Info -->
<div class="reveal" id="exampleModal1" data-reveal>
  <h1 id="modalTitle" style="color: black;">Title</h1>
  <p id="modalAge">Age</p>
  <img src="" alt="Profile Image" id="modalImage" style="display: none;">
  <p id="portfolio">Portfolio</p>
  <a href="" id="modalContactLink" class="button">Contact</a>
  <button class="close-button" data-close aria-label="Close modal" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

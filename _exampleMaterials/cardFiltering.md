
# Searchable Materials

<div class="grid-container" data-site-url="{{ site.url }}" data-base-url="{{ site.baseurl }}">
  <div class="grid-x grid-padding-x">
    <div class="cell">
      <input type="text" id="search" placeholder="Tag search...">
    </div>
  </div>

  <div class="grid-x grid-padding-x">
    <div class="cell auto">
      <div id="tagContainer" class="tag-container"></div>
    </div>
    <div class="cell shrink">
      <div class="toggle-container">
        <div class="toggle-label">Tag Search Type</div>
        <label class="switch">
          <input type="checkbox" id="filterModeToggle">
          <span class="slider round"></span>
        </label>
        <div class="label-container">
          <span class="and-label">AND</span>
          <span class="or-label">OR</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Dynamic content for link cells-->

  <div id="linkCellContent">

  </div>

  <h3>Full Application Profiles</h3>
  <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3" id="peopleContent">
    <!-- Dynamic Content for cards-->
  </div>
</div>

<!-- Modal for Detailed Info -->
<div class="reveal" id="exampleModal1" data-reveal>
  <h3 id="modalTitle" style="color: black;">Title</h3>
  <p id="modalCycle">Cycle</p>
  <img src="" alt="Profile Image" id="modalImage" style="display: none;" class=smallheadshot>
  <div id="modalContent"></div>
  <!--<div id="timeline"></div>  Add this div for the timeline -->
  <button class="close-button" data-close aria-label="Close modal" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

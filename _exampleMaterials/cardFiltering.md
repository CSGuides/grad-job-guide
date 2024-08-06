
# Searchable Materials

<div class="grid-container">
  <div class="grid-x grid-padding-x">
    <div class="cell">
      <input type="text" id="search" placeholder="Keyword search...">
    </div>
  </div>

  <div class="grid-x grid-padding-x">
    <div class="cell">
      <div id="tagContainer"></div>
    </div>
  </div>

  <h3>Example CVs and Resumes</h3>
  <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3" id="resumesCvs">
    <!-- Dynamic Content -->
  </div>

  <h3>Example Cover Letters</h3>
  <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3" id="coverLetters">
    <!-- Dynamic Content -->
  </div>

  <h3>Example Research Statements</h3>
  <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3" id="researchStatements">
    <!-- Dynamic Content -->
  </div>

  <h3>Example Teaching Statements</h3>
  <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3" id="teachingStatements">
    <!-- Dynamic Content -->
  </div>

  <h3 id="Diversity Statements"> Example Diversity Statements</h3>
  <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3" id="diversityStatements">
    <!-- Dynamic Content -->
  </div>


  <h3>Full Application Profiles</h3>

  <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3" id="peopleContent">
    <!-- Dynamic Content -->
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

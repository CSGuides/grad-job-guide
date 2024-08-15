# Preparing Your Resume

Resume-writing is well-established, although many of the standard
techniques aren't as applicable at the Ph.D. level. For example, it's our
impression that your previous work experience may not matter as much. 
Instead, you
want to emphasize your publications and any teaching experience you might
have. Also list all of your references---sometimes people
actually call your references to get more information.

A typical academic resume contains sections for publications, teaching,
and service (e.g., paper reviewing, serving on departmental committees, or 
conference organizing). You might also include information on your 
experience with grant-writing, research mentorship, industrial internships,
and any media coverage of your research.

Here are some concrete tips for organizing your resume or CV:

* **Have an Opening Tag Line:** We recommend using a short phrase at the top
  of your resume to contextualize your application. For example,
  Madeline led with:

  > Combining **software engineering** with human factors and **programming 
    languages** techniques to **improve programmer productivity and wellbeing**

* **Emphasize Publications:** Your publications and publication venues are
  very important. We recommend summarizing your publications in a
  sentence or two. As one example, Madeline wrote:

  > 16 peer-reviewed publications: 13 conference papers (ICSE, 
    ESEC/FSE, PLDI, ASE, OOPSLA, etc.) including a distinguished 
    paper award at ESEC/FSE, 3 peer-reviewed workshop papers. Four papers 
    with undergraduate advisees, including three with student first 
    authors. Three papers with interdisciplinary collaborators.

  Wes did not include this type of summary. If he were to apply again, he would
  include one because he saw people at interviews skim his resume for exactly
  this summary while he sat before them.  

* **Separate by Publication Type:** We recommend organizing your
  publications by type (e.g., "Journal Articles," "Refereed Conference
  Publications," "Invited Articles", "Workshops," etc.). Listing all 
  publications chronologically without distinguishing by venue
  type can appear disingenuous, and it can be annoying for the reader
  to spend time mentally sorting the list (since workshops 
  "count less" than other venue types).

  To this end, Claire included journal impact factors and conference 
  acceptance rates. She also highlighted venue acronyms and applicable 
  awards in the left-hand column of her publication list.  These 
  decisions were intended to make her CV easier to scan for this type 
  of information, because interviewers look for it.

* **Consider Section Summaries:** Kevin Leach had applied to jobs as a 
  "cross-disciplinary" researcher with a few years of postdoctoral experience.
  This led to a complicated list of publications and grants. 
  Kevin found it helpful to have summaries at the top of each section to
  highlight which venues were relevant to which areas, which classes he had
  taught, and which grants were received at each institution.

* **Teaching Qualifications:** If you are applying for teaching 
  positions (e.g., top-tier teaching academia, small liberal arts 
  college, instructor position), you should highlight your teaching 
  qualifications---such as courses taught, courses designed, and numerical 
  evaluation scores---early in your resume.

  If you are going for this type of job, your resume 
  should be at least as good as Wes's and hopefully much better 
  (more like Kevin Angstadt's below, say). Wes's were the bare 
  minimum required (e.g., they sufficed to get him an interview at 
  Wesleyan) but they were mentioned as a concern (until he was able to 
  convince them with his presentation) and he has no doubt that other teaching
  places rejected him because of them. Teaching jobs will also want multiple 
  numerical evaluations (e.g., Wes was asked explicitly what his numerical teaching
  evaluations were at Wesleyan, and we imagine that they're even more serious about
  it at other departments).

**The importance of your resume:** At many institutions, your resume 
might be the only document that makes it through the application process 
to the interviewers. During interviews, Wes often observed people 
reviewing his resume as he entered the room or while he was sitting 
down. In contrast, his research statement was rarely mentioned. 
Claire had similar experiences but notes that at some schools, 
interviewers had read at least one of her publications before meeting 
with her.

**Example Resumes:** Here are our resumes from when we were applying, 
which serve as a lower-bound on required content and style. 

{% assign allowed_ids = "endremad,angstadt,kleach,fry,legoues,weimer" | split: ',' %}  <!-- Replace 'id1' and 'id2' with your actual ids -->
{% if site.data.people %}
{% assign sorted_id = site.data.people | sort: 'id' %}
{%- for dossier in sorted_id -%}
{% if allowed_ids contains dossier.id %}
{% for item in dossier.resume %}
{%- capture src -%}/assets/materials/{{ dossier.id | uri_escape }}/{{ item.file | uri_escape }}{%- endcapture -%}
{%- assign url = src | relative_url -%}
* [{{ dossier.display }} Resume {% if item.description %}({{ item.description | strip }}){% endif %}]({{ url }})
{% endfor %}
{% endif %}
{%- endfor -%}
{% endif %}

For more examples of resumes and CVs, see the 
[Example Materials](/grad-job-guide/exampleMaterials) tab.




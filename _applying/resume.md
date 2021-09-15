# Preparing Your Resume

Resume-writing is well-established, although many of the standard
techniques aren't as applicable at this level (e.g., it is our personal
impression that your previous work experience doesn't really matter). You
want to emphasize your publications and any teaching experience you might
have. Also list all of your references one more time (sometimes people
actually call your references to get more information). If Wes were doing
this again he would list publication venues all at once in some
topic sentence (e.g., "I have published in POPL, PLDI, TOPLAS, OOPSLA,
...") because he saw people at interviews skim his resume for exactly
that summary while he sat before them. 

Along these lines, more than one person advised Claire to organize her
publication list by "type": "Journal Articles," "Refereed Conference
Publications," "Invited Articles", "Workshops," etc.  She was told that
listing all publications chronologically without distinguishing by venue
type can appear disingenuous, and that it is annoying for the reader (who
must evaluate dozens of applications at once) to spend time mentally
sorting the list (since workshops "count less" than other venue types).
She included journal impact factors and conference acceptance rates. She
highlighted venue acronyms and applicable awards in the left-hand column of
the publication list.  These decisions were intended to make her CV easier
to scan for this type of information, because interviewers look for it.

At many places the resume appeared to be the only thing that actually made it
through the application bureaucracy to people. At least four times, Wes saw
people explicitly looking over his resume either as he was coming in to the
interview or while he was sitting down. By contrast, he never heard anyone
mention his research statement.  Claire had similar experiences, but notes that
at at least two schools, at least one interviewer had read at least one of her
publications before sitting down with her.

Kevin Leach had applied to jobs as a "cross-disciplinary" researcher
with a few years of postdoctoral experience.
This led to a complicated list of publications and grants. 
KL found it helpful to have summaries at the top of each section to
highlight which venues were relevant to which areas, which classes KL had
taught, and which grants were received at each institution.

Anyway, here are our resumes from when we were applying, which again serve
largely as a lower-bound on required content and style. Also included are a
few other examples. 

{% if site.data.people %}
{% assign sorted_id = site.data.people | sort: 'id' %}
{%- for dossier in sorted_id -%}
{% for item in dossier.resume %}
{%- capture src -%}/assets/materials/{{ dossier.id | uri_escape }}/{{ item.file | uri_escape }}{%- endcapture -%}
{%- assign url = src | relative_url -%}
- [{{dossier.display}} Resume {% if item.description %}({{ item.description | strip }}){% endif %}]({{ url }})
{% endfor %}
{%- endfor -%}
{% endif %}

Note that if you are applying for any sort of teaching job (e.g., top-tier
teaching academia, small liberal arts college, instructor position) your
teaching qualifications (courses taught and letters talking about it) should be
at least as good as Wes's and hopefully much better (more like Andy Begel's
above, say). Wes's were the bare minimum required (e.g., they sufficed to get him
an interview at Wesleyan) but they were mentioned as a concern (until he was able
to convince them with his presentation) and he has no doubt that other teaching
places rejected him because of them. Teaching jobs will also want multiple
numerical evaluations (e.g., Wes was asked explicitly what his numerical teaching
evaluations were at Wesleyan, and we imagine that they're even more serious about
it at other departments).

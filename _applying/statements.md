# Preparing Your Statements

Your statements are the core of your application. Almost all jobs for
fresh Ph.D.'s require a [Research Statement](#research-statement). Most 
academic jobs also require a [Teaching Statement](#teaching-statement) and
a [Diversity Statement](#diversity-statement).

### General Advice for All Statements

1. **Start Early:** Writing these statements can take a 
  surprisingly long time. Many people feel that their statements 
  don’t fully reflect who they are as people. The job application 
  process often forces a “putting yourself forward” or “please hire me” 
  tone that may not feel authentic. **Start early and seek regular 
  feedback** because your own draft efforts will invariably 
  feel stupid to you.

2. **Review Examples:** Reviewing examples can help you 
  understand what’s expected for the jobs you are applying for. It can
  also help you "face the tyranny of the blank page" and start writing.
  This Guide contains a collection of [Example Materials](/grad-job-guide/exampleMaterials)
  that may help you get started. Additionally, consider asking friends and
  mentors who were recently on the job market to share their materials. 
  
   Another strategy is to download examples from others who have recently 
  applied for jobs. Many applicants post their materials on their 
  websites, and a quick Google search (e.g., programming languages 
  "teaching statement") can yield hundreds of results. We recommend
  searching for and downloading last year's materials the summer 
  before you apply (e.g.,
  May/June), before successful applicants remove them from
  their websites. Of course, if you get random people from the Internet you probably won't have heard of them and thus won't know if they are good or bad
  examples. So try to soak up all of the documents from people in your
  department that you can get a read on.


3. **Focus on Structure:** Ensure that your statements are 
  well-organized with clear topic sentences and logical flow. 
  Some faculty reviewers might skim your statements rather than reading 
  them in full. Use **bolding** and other structural elements to 
  make sure the main ideas are easy to grasp at a glance, 
  and to encourage readers to engage more thoroughly with your application.

4. **Make Your Statements Available Online:** Make sure that your materials are
  available on your website. Even if you've officially sent in your materials,
  faculty reviewing your application may download them directly from your
  webpage, as official application systems can be difficult to navigate.
  In addition, many of your interviewers will look 
  at your materials the day (or even hour) before they speak with you, 
  and they will likely look on your website first. 


<!--Make sure that yours are available
on-line as well. Many places, even places to which you have officially sent
materials, will get the versions off of your web page because the official
application materials get lost in the bureaucracy or were printed out
somewhere or somesuch. Wes was involved in multiple phone and sit-down
interviews where people mentioned reading the materials from his web page as
they were talking.  

While we're on the subject, people will, in fact, read the details of your web
page when they are considering you as a candidate. For example, Dave Evans at
Virginia mentioned (somewhat tongue-in-cheek, somewhat not) that one of the
reasons he knew Wes would fit in and be a solid hire is that he read and liked
the parody programming languages examination test on his web page. Both Wes and
Claire had multiple people comment on the photos or hobbies mentioned on their
web pages, even if those mentions were exceedingly brief (such as Claire's
involvement with her local roller derby league).


As of 2013, there exists a larger collection of such materials floating
around in the email archives of recently-hired junior faculty in Software
Engineering.  Contact Claire if you're seriously on the market, and she will see
if she can access it for you, so long as you solemnly vow to share your own
materials after your search concludes.-->

We now detail each statement in turn.

## Research Statement
The traditional approach here is to craft your research statement 
by summarizing your thesis proposal. These statements are typically 2-3 
pages long and start with an overview of your research goals. They then 
discuss each main thrust of your thesis proposal. If you are applying for a 
teaching-focused job, such as in Liberal Arts academia, you might consider 
including a section on the role undergraduate mentorship plays in your 
research.

References aren't required in a research 
statement, but they don't hurt if you feel better including them (
or if you have a bunch of publications and
want to highlight that). Kevin Leach notes that by the time he was
applying for jobs, he had published across several disciplines.  He used
citations in his research statement to help the reader follow which
publications were most relevant in constructing a coherent narrative.

Here are some concrete examples:

{% assign allowed_ids = "endremad,angstadt,kleach,fry,legoues,weimer" | split: ',' %} 
{% if site.data.people %}
{% assign sorted_id = site.data.people | sort: 'id' %}
{%- for dossier in sorted_id -%}
{% if allowed_ids contains dossier.id %}
{% for item in dossier.research %}
{%- capture src -%}/assets/materials/{{ dossier.id | uri_escape }}/{{ item.file | uri_escape }}{%- endcapture -%}
{%- assign url = src | relative_url -%}
* [{{ dossier.display }} Research Statement {% if item.description %}({{ item.description | strip }}){% endif %}]({{ url }})
{% endfor %}
{% endif %}
{%- endfor -%}
{% endif %}

For more examples of research statements, see the 
[Example Materials](/grad-job-guide/exampleMaterials) tab.

## Teaching Statement

Teaching statements are also typically 2-3 pages long, with three pages
being more common if you are going for a teaching-focused role.

They usually begin with an overview of your *teaching philosophy*,
which communicates your beliefs about teaching and learning. This
includes how you approach your role as an educator and how you
engage with students. It may
take some time to develop your teaching philosophy. If you are stuck,
it can be helpful to brainstorm specific examples from your teaching
experiences that you might want to talk about, and then think about if there
are any underlying values connecting them. In the rest of your statement, you'll want to
summarize your teaching experience, and then demonstrate how your
teaching philosophy is realized through compelling examples and
anecdotes.

If you are applying for a *research-focused* position, you might consider
including your approach to mentoring junior researchers. If you
are going for a *teaching-focused* position, you may want to focus
more on classroom teaching, and talk about your experience with lecturing and
course design.

Here are some concrete examples:

{% assign allowed_ids = "endremad,angstadt,kleach,fry,legoues,weimer,hammada" | split: ',' %} 
{% if site.data.people %}
{% assign sorted_id = site.data.people | sort: 'id' %}
{%- for dossier in sorted_id -%}
{% if allowed_ids contains dossier.id %}
{% for item in dossier.teaching %}
{%- capture src -%}/assets/materials/{{ dossier.id | uri_escape }}/{{ item.file | uri_escape }}{%- endcapture -%}
{%- assign url = src | relative_url -%}
* [{{ dossier.display }} Teaching Statement {% if item.description %}({{ item.description | strip }}){% endif %}]({{ url }})
{% endfor %}
{% endif %}
{%- endfor -%}
{% endif %}

For more examples of teaching statements, see the 
[Example Materials](/grad-job-guide/exampleMaterials) tab.

Overall, most teaching statements tend to look
somewhat similar. At Wesleyan, the only place Wes went
that mentioned his teaching statement at all, they mentioned that it was
creative and the best one they had seen in a while.  Given how interesting
his isn't, that gives you a good idea for how low the bar is set if you
want to do something personal with your teaching statement. Being
yourself is still key, however. Not everyone should go for a teaching
statement in which they claim not to be nice. Kevin Angstdat's statement
is something of an upper bound on teaching statement
impressiveness, and a statement
like his works well if you're aiming for a teaching job.

## Diversity Statement

Since 2015, Diversity Statements (or Diversity, Equity, and 
Inclusion Statements) have
become increasingly popular. These are typically 1-2 pages long 
and demonstrate your commitment to contributing to a supportive 
and inclusive environment.

In our personal opinion, the best diversity statements focus
on actions you've taken for sustainable change and support rather than 
meaningless platitudes. For example,
Madeline talked about organizing a speaker series to expose students
to different CS careers, including metrics on attendance and
and the positive feedback she received. However, some readers may 
expect a diversity philosophy at the start.

Here are a few concrete examples:

{% assign allowed_ids = "endremad,angstadt,kleach,fry,legoues,weimer" | split: ',' %} 
{% if site.data.people %}
{% assign sorted_id = site.data.people | sort: 'id' %}
{%- for dossier in sorted_id -%}
{% if allowed_ids contains dossier.id %}
{% for item in dossier.diversity %}
{%- capture src -%}/assets/materials/{{ dossier.id | uri_escape }}/{{ item.file | uri_escape }}{%- endcapture -%}
{%- assign url = src | relative_url -%}
* [{{ dossier.display }} Diversity Statement {% if item.description %}({{ item.description | strip }}){% endif %}]({{ url }})
{% endfor %}
{% endif %}
{%- endfor -%}
{% endif %}

For more examples of diversity statements, see the 
[Example Materials](/grad-job-guide/exampleMaterials) tab.



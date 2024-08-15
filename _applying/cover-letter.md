# Cover Letters

The cover letter is one of the least important elements of your
application, but getting it wrong can have significant consequences. A
poorly crafted cover letter can lead to your entire application being misfiled
or overlooked.

Your cover letter should be brief and to the point. It should: 

1. Quickly introduce who you are (e.g., name, current institution and title).
2. Specify the job you are applying for (including any reference numbers).
3. Give a high-level overview of your research focus.  
4. Indicate why you are excited about the position, why you are a good fit,
  and why you are likely to accept an offer. 
5. Mention any special circumstances (e.g., two-body problem).

Limit the overview of your research focus to a few sentences; 
your [research statement](#research-statement) is the place for detail. 
This is particularly important when applying to large schools 
that may have many independent
searches but only one application portal. **Make it easy for a hiring chair in
your area to quickly realize you're one of theirs!**

(On a related note: if a portal asks you to select research area keywords, please be
accurate. Selecting them all does not help you.)

Reasons you are excited about the position can include the type of
school (public vs. private, R1 vs. liberal arts), the location, 
specific initiatives or centers related to your research, and
past collaborations you've had with faculty at the institution. 
**If someone on the inside told you to apply, be sure to mention it 
in your cover letter.**

Here are a few concrete examples:

{% assign allowed_ids = "endremad,angstadt,kleach" | split: ',' %}  <!-- Replace 'id1' and 'id2' with your actual ids -->
{% if site.data.people %}
{% assign sorted_id = site.data.people | sort: 'id' %}
{%- for dossier in sorted_id -%}
{% if allowed_ids contains dossier.id %}
{% for item in dossier.cover %}
{%- capture src -%}/assets/materials/{{ dossier.id | uri_escape }}/{{ item.file | uri_escape }}{%- endcapture -%}
{%- assign url = src | relative_url -%}
* [{{ dossier.display }} Cover Letter {% if item.description %}({{ item.description | strip }}){% endif %}]({{ url }})
{% endfor %}
{% endif %}
{%- endfor -%}
{% endif %}

For more examples of cover letters, see the [Example Materials](/grad-job-guide/exampleMaterials) tab.

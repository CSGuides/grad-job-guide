# Preparing Your Research and Teaching statements

The traditional approach here is to craft your research statement by
summarizing your thesis proposal and to craft your teaching statements by
looking at what others have written and fumbling around. Here are some
concrete examples:

{% if site.data.people %}
{% assign sorted_id = site.data.people | sort: 'id' %}
{%- for dossier in sorted_id -%}
{% for item in dossier.research %}
{%- capture src -%}/assets/materials/{{ dossier.id | uri_escape }}/{{ item.file | uri_escape }}{%- endcapture -%}
{%- assign url = src | relative_url -%}
- [{{dossier.display}} Research Statement {% if item.description %}({{ item.description | strip }}){% endif %}]({{ url }})
{% endfor %}
{%- endfor -%}
{% endif %}

{% if site.data.people %}
{% assign sorted_id = site.data.people | sort: 'id' %}
{%- for dossier in sorted_id -%}
{% for item in dossier.teaching %}
{%- capture src -%}/assets/materials/{{ dossier.id | uri_escape }}/{{ item.file | uri_escape }}{%- endcapture -%}
{%- assign url = src | relative_url -%}
- [{{dossier.display}} Teaching Statement {% if item.description %}({{ item.description | strip }}){% endif %}]({{ url }})
{% endfor %}
{%- endfor -%}
{% endif %}

References aren't required in a research statement, but they don't hurt if
you feel better with them (or if you have a bunch of publications and want
to highlight that).

Almost all teaching statements seem to end up looking somewhat identical
(see Lerner, Jhala and Whaley above). At Wesleyan, the only place Wes went
that mentioned his teaching statement at all, they mentioned that it was
creative and the best one they had seen in a while.  Given how interesting
his isn't, that gives you a good idea for how low the bar is set if you
want to do something personal with your teaching statement. Being
yourself is still key, however. Not everyone should go for a teaching
statement in which they claim not to be nice. Andy Begel's emphasis on
education results is something of an upper bound on teaching statement
impressiveness (unless you're actually in CS education), and a statement
like his would fit in well if you're aiming for a teaching job. 

It's worth noting that many people feel that their statements don't really
reflect who they are as people. Some are of the opinion that job
application materials necessarily adopt a "putting yourself forward" or
"please hire me" tone that's not indicative of how the person really
behaves in general. Writing these statements can take a surprisingly long
time because your own draft efforts will invariably sound stupid to you. 

Aside from asking your friends to show you their statements, a good way to
get these things is to download them one year early. Almost everyone puts
their job application materials up on their web page when they are applying
for a job. In May/June, Googling for `programming languages "teaching
statement"` yields hundreds of results. Just download some and save
them. Of course, if you get random people from the Internet you probably
won't have heard of them and thus won't know if they are good or bad
examples. So try to soak up all of the documents from people in your
department that you can get a read on.  

As of 2013, there exists a larger collection of such materials floating
around in the email archives of recently-hired junior faculty in Software
Engineering.  Contact Claire if you're seriously on the market, and she will see
if she can access it for you, so long as you solemnly vow to share your own
materials after your search concludes.

Make sure that yours are available
on-line as well. Many places, even places to which you have officially sent
materials, will get the versions off of your web page because the official
application materials get lost in the bureaucracy or were printed out
somewhere or somesuch. Wes was involved in multiple phone and sit-down
interviews where people mentioned reading the materials from his web page as
they were talking.  Half of your interviewers will look for/at your materials the
day/hour before they speak with you, and they will look on your website
first. 

While we're on the subject, people will, in fact, read the details of your web
page when they are considering you as a candidate. For example, Dave Evans at
Virginia mentioned (somewhat tongue-in-cheek, somewhat not) that one of the
reasons he knew Wes would fit in and be a solid hire is that he read and liked
the parody programming languages examination test on his web page. Both Wes and
Claire had multiple people comment on the photos or hobbies mentioned on their
web pages, even if those mentions were exceedingly brief (such as Claire's
involvement with her local roller derby league).

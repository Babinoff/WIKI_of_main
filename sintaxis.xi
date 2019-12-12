xi test @
. Basic loop is 100 times faster compared to [python]/[csharp]/[php] [#1] [#3].

Reference .
. [1#] |http://habrahabr.ru/post/162885/#comment_5598039|.
. [2#] |http://habrahabr.ru/post/162885/#comment_5598039|.
Todo#[] .
 |http://habrahabr.ru/post/162885/#comment_5598039|.

. Todo .
	# Links are not working in this test.
	# '#' list symbol is not working.

	. Text with {i input param}, {- cli param}, {i(typed) param}, {i} single
	param, single {i(typed)} param, {param} without i/o modifier.

. Region
	|||
	[http://foo]
	[https://foo]
	||| text
	text |||
	text ||| text
	||special||
	text ||special||
	||special|| text
	text ||special|| text
	|special with spaces|
	text |special with spaces| text
	text | text
	text | text |
	text | text | text
	text |{lng:foo}not a special but language| text
	. text |{lng:foo}not a special but language| text
	. |{}special|.
	. |{}| this is special.
	. |||
	. ||| text
	. ||special||
	. ||special|| text
	. text |||
	. text ||| text
	. text ||special||
	. text ||special|| text
	. [http://foo]
	. [https://foo]
	| code
	|{lng:foo} code
	| {lng:foo} code
	| code
	. | code
	. |{lng:foo} code
	|{lng:foo} code
	|{lng:foo}
	|
	. | {lng:foo} code
	. |not a code
	! | code
	? | code
	. text | not a code
	[0.0...1.0) range, not a link.
	. |{}| non-text item (no meta).
	. |{| and |}| two non-text items.
	. |{x}| Non-text item, not a language specifier.
	. |{x}|: Non-text item and |:|.
	|{lng:py}a = 1| inline code with spaces, one per line, no '|'.
	|{lng:py}a=1| inline code without spaces, |{lng:py}a=1|2|.
	. |{lng:py}a = 1|: inline code after paragraph.
	. |{lng:js}
	| [notlink]
	. | [notlink]
	[jump test]
	[c] - single wikiword.
	kh1 .
	h1 link[] .
	h1 local link [#1] .
	h1 wikiword link [wikiword] .
	[wikiword] h1 wikiword link .
	[wikiword] h1 wikiword link [wikiword] .
	[wikiword] h1 wikiword link[] [wikiword] .
. Paragraph.
  h2 .
  h2 link[] .
  h2 local link [#1] .
  h2 wikiword link [wikiword] .
  . Paragraph.
    h3 .
    h3 link[] .
    h3 local link [#1] .
    h3 wikiword link [wikiword] .
    . Paragraph.
      h4 .
      h4 link[] .
      h4 local link [3#] .
      h4 wikiword link [wikiword] .
      . Paragraph.
        h5 .
        h5 link[] .
        h5 local link [#python] .
        h5 wikiword link [wikiword] .
        . Paragraph.
          h6 .
          h6 link[] .
          h5 local link [#Todo] .
          h6 wikiword link [wikiword] .
          . Paragraph.
h1 local link [#Todo]
 .
. | dot at end is always paragraph .
. dot at end is always paragraph $ .
not a link [] .
paragraph$ .
wrong color of following square braces [] .
wrong header color $ .
[] .
. Above is h1.
  [] .
  . Above is h2.
  | . text .
  . Above is h3.

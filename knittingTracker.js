<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="description" content="A page for tracking knitting or crocheting">
    <link rel=stylesheet type="text/css" href="knittingTracker.css">
    <link rel=stylesheet type="text/css" href="symbols.css">

    <title>Knitting Tracker</title>
</head>

<body>
<form action="">
    <fieldset>
        <legend>Pattern Information</legend>
        Name:
        <input type="text" name="name"><br />
        Description:
        <textarea name="description" rows="3" cols="30"></textarea><br />
        Skill requirement:
        <textarea name="skills" rows="3" cols="30"></textarea><br />
        Materials:
        <textarea name="materials" rows="3" cols="30"></textarea><br />
        Gauge:
        <input type="number" name="column" min="0"> x
        <input type="number" name="row" min="0"> per
        <input type="radio" name="gauge" value="4 inch"> 4"
        <input type="radio" name="gauge" value="10 stitches"> 10 stitches<br />
        Designer and Credit information:
        <input type="text" name="credit"><br />
        Copyright Statement:
        <input type="text" name="copyright">
    </fieldset>
</form>

<textarea class="noscrollbars" id="textBox" onkeyup="autoGrow(this);" placeholder="Row 1: K2,P2,K2&#x0a;Row 2: K2,P2,K2"></textarea>
<br />
<button onclick="createChart()">Try it</button>
<button onclick="splitLines()">split</button>
<input type="submit" onclick="matchRegExp()" value="match" />

<table id="knittingChart" align="center">
    <caption>Knitting Chart</caption>
</table>
</body>


<script src="knittingTracker.js"></script>
<script src="dictionary.js"></script>
</html>

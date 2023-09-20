
<template>
<table style="width: 84ch;" id="header">
  <tr>
    <td class="tl">&nbsp;</td>
    <td class="tc"></td>
    <td class="tr">&nbsp;</td>
  </tr>
  <tr>
    <td  class="ml">&nbsp;</td>
    <td style="text-align: right; padding-right: 1ch;">

        <a href="#">Services</a> 
        <span class="spacer">∙</span> 
        <a href="#">Crew</a> 
        <span class="spacer">∙</span> 
        <a href="#">Contacts</a>

    </td>
    <td  class="mr">&nbsp;</td>
  </tr>
  <tr>
    <td class="bl">&nbsp;</td>
    <td class="bc"></td>
    <td class="br">&nbsp;</td>
  </tr>
</table>
</template>
<style>
table {
    border: 0;
    border-spacing: 0;
}
.tl{
    background-image: url('/assets/img/brdr/corner.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 1ch;
}
.tc, .bc {
    background-image: url('/assets/img/brdr/horizontal.png');
    background-repeat: repeat-x;
    background-size: contain;
}

.ml, .mr {
    background-image: url('/assets/img/brdr/vertical.png');
    background-repeat: repeat-y;
    background-size: contain;
    width: 1ch;
}

.bl{
    background-image: url('/assets/img/brdr/corner.png');
    background-repeat: no-repeat;
    background-size: contain;
    -moz-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    -webkit-transform: av(-1);
    transform: scaleY(-1);
    width: 1ch;
} 

.tr{
    background-image: url('/assets/img/brdr/corner.png');
    background-repeat: no-repeat;
    background-size: contain;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    width: 1ch;
} 

.br{
    background-image: url('/assets/img/brdr/corner.png');
    background-repeat: no-repeat;
    background-size: contain;
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    width: 1ch;
} 

    .spacer {
        margin-right: 1ch;
        margin-left: 1ch;    
        color:  var(--pgnwr-dark);}
</style>
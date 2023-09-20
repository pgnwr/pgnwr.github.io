
<template>
<!-- <table style="width: 84ch;" id="header">
  <tr>
    <td class="tl"></td>
    <td class="tc"></td>
    <td class="tr"></td>
  </tr>
  <tr>
    <td  class="ml"></td>
    <td style="text-align: right; padding-right: 1ch;">

        <a href="#">Services</a> 
        <span class="spacer">∙</span> 
        <a href="#">Crew</a> 
        <span class="spacer">∙</span> 
        <a href="#">Contacts</a>

    </td>
    <td  class="mr"></td>
  </tr>
  <tr>
    <td class="bl"></td>
    <td class="bc"></td>
    <td class="br"></td>
  </tr>
</table> -->

 <div class="frame">
    <div class="line">
        <div class="wrapper">


       
        <div class="content">
            <a href="#">Services</a> 
            <span class="spacer">+</span> 
            <a href="#">Crew</a> 
            <span class="spacer">+</span> 
            <a href="#">Contacts</a>
        </div>
    </div>
    
    </div>
 </div>

</template>
<style>

.frame {
    padding: calc(0.5em - 1px) calc(0.5ch - 1px) ;
}

.line {
    background-color: var(--pgnwr-dark);
    padding: 2px;
}

.wrapper {
    background-color: var(--pgnwr-background);
    padding: calc(0.5em - 1px) calc(0.5ch - 1px);
}

.content {
    padding-right: 1ch;
    padding-left: 1ch;
}

table {
    border: 0;
    border-spacing: 0;
}

.tc, .bc {
    background-image: url('/assets/img/brdr/horizontal.png');
    background-repeat: repeat-x;
    background-size: contain;
    height: 16px;
    min-width: 8px;
}

.tc {
    background-position: left bottom;
}

.bc {
    background-position: left top;
}


.ml, .mr {
    background-image: url('/assets/img/brdr/vertical.png');
    background-repeat: repeat-y;
    background-size: contain;
    min-height: 16px;
    width: 8px;
}
.mr {
  background-position: left;
}
.ml {
  background-position: right;
}

.tl{
    height: 16px;
    width: 8px;
    background-image: url('/assets/img/brdr/corner-tl.png');
    background-repeat: no-repeat;
    background-size: contain;
    
    background-position: right bottom;

}

.bl{
    height: 16px;
    width: 8px;
    background-image: url('/assets/img/brdr/corner-bl.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right top;
} 

.tr{
    height: 16px;
    width: 8px;
    background-image: url('/assets/img/brdr/corner-tr.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left bottom;
} 

.br{
    height: 16px;
    width: 8px;
    background-image: url('/assets/img/brdr/corner-br.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left top;
} 

    .spacer {
        margin-right: 1ch;
        margin-left: 1ch;    
        color:  var(--pgnwr-dark);}
</style>
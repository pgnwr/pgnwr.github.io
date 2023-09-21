<template>
    <div class="footer">
        <div class="legal"> 
            Paganware, MB (306354553)<br/>
            V. Nageviciaus g. 3, Vilnius
        </div>
    <div class='spacer'>
    </div>
        <div class="links"> 
            <a href="https://www.linkedin.com/company/paganware" target="_blank">LinkedIn</a>
            <a href="https://www.upwork.com/o/companies/~013f27834c6a24756f" target="_blank">UpWork</a>
            
        </div>
        <div class="links"> 
            <a href="https://github.com/pgnwr" target="_blank">GitHub</a>
            Patreon
        </div>
    </div>
   
   </template>
   <style>

    .footer {
        bottom: 0px;
    position: absolute;
    width: calc(100% - 2ch);
    padding-bottom: 1em;
      display: flex;
  flex-direction: row;
    }

    .footer > .legal {
        display: flex;
        flex-direction: column;
        width: 28ch;
        color: var(--pgnwr-dark); 
    } 
    .footer > .spacer {
        display: flex; 
        flex-grow: 1;
    }
    .footer > .links {
        display: flex;
        flex-direction: column;
        width: 8ch;
        margin-left: 2ch;
    } 
</style>
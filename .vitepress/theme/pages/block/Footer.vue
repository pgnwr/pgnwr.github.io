<template>
    
    <div class="footer">
        <div class="divider">  </div>
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
            <a href="https://patreon.com/paganware" target="_blank">Patreon</a>
        </div>
    </div>
   
   </template>
   <style>

    .footer {
        bottom: 0px;
    position: absolute;
    width: calc(100% - 2ch);
    padding-bottom: 0.5em;
      display: flex;
  flex-direction: row;
  flex-wrap: wrap;
    }

    .footer > .legal {
        text-align: left;
        flex-direction: column;
        color: var(--pgnwr-dark); 
    } 
    .footer > .spacer {
        /* display: flex;  */
        flex-grow: 1;
    }
    .footer > .links {
        display: flex;
        /* flex-direction: column; */
        /* width: 8ch; */
        /* margin-left: 2ch; */
    } 
    .divider {
        width: 86ch;
        margin-top: calc(-0.5em - 2px);
        position: absolute;
        height: 2px;
        background-color: var(--pgnwr-dark); 

    }
</style>
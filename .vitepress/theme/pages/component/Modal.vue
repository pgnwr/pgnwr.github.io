<template>
    
    <div class="modal-cover"> </div>
    <div class="modal-handle"> 
        <div class="modal">
            <div class="header">
                <div class="modal-frame-top">
                <div class="modal-frame-lt">
                    <div class="line">
                        <div class="inlay"> </div>
                </div>
                    
               
                </div>
                <div class="modal-close-handle">
                    [X]
                </div>
                <div class="modal-frame-rt">
                    <div class="line">
                        <div class="inlay"> </div>
                </div>
            </div>
                

            </div>

</div>
<div class="main">
   <div class="frame">
        <div class="handle">
            <div class="scrollable">
          <div class="content">

          <div class="header"> 

            <div class="icon"><img src="../../../../assets/img/srvs/language.png" style=" " alt="icon"/> </div>
            <div class="description">
                <div class="title">Software development</div>
                <div class="summary">Need some software be ready quick? Or you need someone to code solution for you? Worry not we are hear to help. </div>
            </div>
          </div>

          <div class="service">
            <div class="header"> 
                <div class="title"> 
                Consultation 
            </div>
            <div class="spacer"> 
       
            </div>
            <div class="price"> 
                $35<img src="../../../../assets/img/icns/time.png" alt="/h"/> 
            </div>
            </div>
            <div class="content"> 
                <p>
                    If you are feeling lost, upset, don't know what to do, have problems in your relationship or struggling with some kind of situation 
                </p>
            </div>
          </div>
          <div class="service">
            <div class="header"> 
                <div class="title"> 
                    Therapeutic tale
            </div>
            <div class="spacer"> 
       
            </div>
            <div class="price"> 
                $100<img src="../../../../assets/img/icns/pack.png" alt="/h"/> 
            </div>
            </div>
            <div class="content"> 
                <p>
                    Individual therapeutic story, designed especially for you. Helps find the solution to the specific problem, find answers to questions like “What do I really want right now? What is my mistake? What is really going on with me right now?”. Consists of three parts: lead-in consultation (40 mins) to formulate the request; the Journey itself (2-3 hours, depends on the length of the story and client’s speed); the end product: your story in PDF with illustrations  
                </p>
            </div>
          </div>

          <div class="service">
            <div class="header"> 
                <div class="title"> 
                    Speaking 
            </div>
            <div class="spacer"> 
       
            </div>
            <div class="price"> 
                $25<img src="../../../../assets/img/icns/time.png" alt="/h"/> 
            </div>
            </div>
            <div class="content"> 
                <p>
                    If you want to boost your language,  expand your vocabulary and simply have fun in English!

                </p>
            </div>
          </div>

          <div class="service">
            <div class="header"> 
                <div class="title"> 
                    Grammar 
            </div>
            <div class="spacer"> 
       
            </div>
            <div class="price"> 
                $25<img src="../../../../assets/img/icns/time.png" alt="/h"/> 
            </div>
            </div>
            <div class="content"> 
                <p>
                    If you struggle to understand grammar or just want to improve your level
                </p>
            </div>
          </div>
          
         
      
</div> 
</div>
</div>
    </div>
</div>
<div class="actions">
    <div class="frame">
        <div class="split"></div>
        <div class="buttons">
<a href="#">Close</a>
</div>
</div>
</div>
</div>
</div>
   

   </template>
   <style>


.service > .header {
    display: flex;
    flex-direction: row;
    padding-top: 1em;
}

.service > .header > .title {
    color: var(--pgnwr-bright);
    font-weight: 700;
}

.service > .header > .spacer {
 flex-grow: 1;
}

.service > .header > .price {
    color: var(--pgnwr-bright);
}

.service > .header {
    display: flex;
    flex-direction: row;
}

.content > .header {
    display: flex;
flex-direction: row;

}
.content > .header > .icon, .content > .header > .description {
    display: flex;
flex-direction: column;
}

.content > .header > .description > .title {
    color: var(--pgnwr-bright);
    font-weight: 700;
    margin-bottom: 1em;

}


.content > .header > .description  {
    color: var(--pgnwr-background);
    font-weight: 400;
}

.content > .header > .icon {
    align-items: center;
}

.content > .header > .icon img {
    height: 6em;
    width: 6em;
    filter: brightness(0.2);
    margin-right: 1ch;
}

.price img {
    height: 2em;
    margin-top: -0.5em;
    margin-bottom: -0.5em;
    margin-left: 1ch;
}

.modal-cover, .modal-handle{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

.modal-cover {
    background-color: #000;
    opacity: 40%;
}


.modal {
    /* width: 64ch; */
    margin-left: auto;
    margin-right: auto;
    
    background-color: var(--pgnwr-dark);

}

.modal-frame-top {
    height: 1em;
    display: flex;
    flex-direction: row;
}

.modal-frame-lt {
    padding-top: calc(0.5em - 1px);
    padding-left: calc(0.5ch - 1px);
    height: 1em;
    min-width: 2ch;
    display: flex;
    flex-direction: column;
flex-grow: 1;
padding-right: 1ch;
}

.modal-frame-lt > .line {
    background-color: var(--pgnwr-background);
height: calc(0.5em + 1px);
}

.modal-frame-lt > .line > .inlay {
    right: 0;
    bottom: 0;
    background-color: var(--pgnwr-dark);
height: calc(0.5em);
margin-top: 2px;
margin-left: 2px;

}


.modal-frame-rt {
    padding-top: calc(0.5em - 1px);
    padding-right: calc(0.5ch - 1px);
    height: 1em;
    min-width: 3ch;
    display: flex;
    flex-direction: column;
    padding-left: 1ch;

}

.modal-frame-rt > .line {
    background-color: var(--pgnwr-background);
height: calc(0.5em + 2px);
}

.modal-frame-rt > .line > .inlay {
    right: 0;
    bottom: 0;
    background-color: var(--pgnwr-dark);
height: calc(0.5em);
margin-top: 2px;
margin-right: 2px;
}

.modal-close-handle {
    color: var(--pgnwr-background);
}

.modal > .main {
    height: calc(100% - 4em);
    display: flex;
    flex-direction: column;
}
.modal > .main > .frame {
    margin-left: calc(0.5ch - 1px);
    margin-right: calc(0.5ch - 1px);
    background-color: var(--pgnwr-background);
    min-height: 1em;
    padding-left: 2px;
    padding-right: 2px;
}
.modal > .main > .frame > .handle {
    background-color: var(--pgnwr-dark);
    min-height: 1em;
    padding-left: calc(0.5ch - 1px);
    padding-right: calc(0.5ch - 1px);
    height: 100%;
}

.modal > .main > .frame > .handle > .scrollable {
    overflow-y: auto;
    height: 100%;
}

.modal > .main > .frame > .handle > .scrollable > .content {
    padding: 1ch;
}

.actions {
    height: 3em;
}

.actions > .frame {
    background-color: var(--pgnwr-background);
    padding-left: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
    margin-bottom: calc(0.5em - 1px);
    margin-right: calc(0.5ch - 1px);
    margin-left: calc(0.5ch - 1px);
}

.actions > .frame > .split {
    background-color: var(--pgnwr-dark);

    height: calc(0.5em - 1px);
    margin-bottom: 2px;
}

.actions > .frame > .buttons {
    background-color: var(--pgnwr-dark);
    height: 1em;
    padding: calc(0.5em - 1px) 1ch;
    text-align: right;
}


</style>
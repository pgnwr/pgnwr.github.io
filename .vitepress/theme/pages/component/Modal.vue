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
                <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit aptent nibh primis id, enim quis risus maecenas. Scelerisque ligula vitae sollicitudin varius amet tristique auctor blandit, lorem semper purus dictum porta curae iaculis aliquet cursus, lobortis arcu diam dui nunc convallis mi. Ut morbi venenatis efficitur ultricies magna dolor, lorem ridiculus penatibus sociosqu mattis torquent ad, molestie cubilia commodo libero himenaeos viverra, dictum varius ornare hendrerit eget. Platea et dapibus phasellus maecenas facilisis penatibus urna fames tempor lectus, natoque id senectus dis ipsum inceptos suscipit mus consectetur integer, ultrices eleifend imperdiet lacus tellus sapien dictum enim eros. Consectetur a erat pretium ad diam per interdum lobortis dictumst, ipsum facilisis orci ante dignissim fringilla suspendisse sem. Egestas integer nisi dignissim primis sodales bibendum leo diam congue in, nunc fames senectus scelerisque nulla hac aptent cras semper, purus sed tempor donec mi elementum accumsan taciti massa. Sem sodales magna felis mattis pretium quam tortor iaculis, congue commodo praesent nec pulvinar ultricies sollicitudin adipiscing, ante proin rhoncus magnis condimentum morbi ullamcorper.
                </p>
                <p>Tortor senectus ut tempus diam cubilia facilisis commodo dis pharetra aenean, donec tincidunt quam faucibus eget sociosqu malesuada potenti orci suscipit aliquet, et vel nam nunc sem cras nulla magnis ante. Vivamus lacinia litora aptent nec a viverra lorem nunc lectus augue purus, senectus molestie imperdiet dolor himenaeos efficitur ad varius convallis. Porttitor potenti elementum semper viverra curabitur turpis faucibus, ullamcorper nec inceptos scelerisque in erat sed eget, laoreet cras dolor ex curae magnis. Eleifend dictum eros torquent aliquet tristique tortor laoreet arcu penatibus, risus suscipit fusce elementum ad libero congue maecenas, orci blandit per molestie fames at in malesuada.
</p>
<p>Accumsan massa tristique cubilia congue justo tempus pharetra commodo eu pretium imperdiet platea venenatis sociosqu, vestibulum blandit amet quisque ante fusce egestas quis vel feugiat potenti aliquam metus. Litora ornare aliquam eleifend dolor fermentum bibendum inceptos rhoncus, congue aliquet nullam penatibus magnis ex suspendisse, rutrum nibh dictumst tristique primis eros elementum. Ligula tempus diam quis accumsan potenti et urna, tempor at amet ridiculus lacus platea parturient porttitor, ipsum sit nisi aliquam interdum per. Ipsum porta proin tempus consequat dui diam condimentum, sit amet praesent curae augue. Tortor nec habitasse nullam inceptos sem conubia curae maecenas aliquet, aliquam in dis metus lectus urna venenatis ipsum ut, consectetur phasellus vel curabitur fringilla eget accumsan himenaeos. Sollicitudin finibus justo morbi molestie mattis magnis fermentum vitae platea netus posuere, efficitur penatibus sagittis ligula facilisi vivamus nostra pretium dolor commodo aenean, blandit venenatis imperdiet at vehicula taciti dignissim in quis duis. Conubia natoque fermentum quisque feugiat nec at nisi dictum velit donec magna, duis ante est posuere mus lacus nascetur tempor mattis accumsan morbi, in venenatis tristique augue nostra ornare maximus eros rutrum congue. Sagittis curae senectus parturient elit aliquet sollicitudin faucibus himenaeos cursus nullam, fusce erat lorem duis torquent litora per lacus lobortis. Maximus quis lacinia sapien lobortis quisque adipiscing ridiculus id taciti, aliquet habitant aliquam nullam turpis faucibus mattis nibh interdum fermentum, primis convallis purus tincidunt per dis sollicitudin vestibulum.
</p>        
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
    opacity: 10%;
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

.main {
    height: calc(100% - 4em);
    display: flex;
}
.main > .frame {
    margin-left: calc(0.5ch - 1px);
    margin-right: calc(0.5ch - 1px);
    background-color: var(--pgnwr-background);
    min-height: 1em;
    padding-left: 2px;
    padding-right: 2px;
}
.main > .frame > .handle {
    background-color: var(--pgnwr-dark);
    min-height: 1em;
    padding-left: calc(0.5ch - 1px);
    padding-right: calc(0.5ch - 1px);
    height: 100%;
}

.main > .frame > .handle > .scrollable {
    overflow-y: auto;
    height: 100%;
}

.main > .frame > .handle > .scrollable > .content {
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
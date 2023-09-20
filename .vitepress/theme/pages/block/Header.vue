
<template>
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

.spacer {
    margin-right: 1ch;
    margin-left: 1ch;    
    color:  var(--pgnwr-dark);
}
</style>
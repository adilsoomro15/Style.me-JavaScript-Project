document.getElementById('lifeContentOne').style.display = 'none';
document.getElementById('lifeContentTwo').style.display = 'none';

function hidePanelsLife() {
    document.getElementById('lifeContentOne').style.display = 'none';
    document.getElementById('lifeContentTwo').style.display = 'none';
    document.getElementById('contentLifeOneTab').className = 'accordionPanelTab';
    document.getElementById('contentLifeTwoTab').className = 'accordionPanelTab';
}

function showLifeContentOne() {
    hidePanelsLife();
    document.getElementById('lifeContentOne').style.display = 'block';
    document.getElementById('contentLifeOneTab').className = 'accordionPanelTab highlight';
}

function showLifeContentTwo() {
    hidePanelsLife();
    document.getElementById('lifeContentTwo').style.display = 'block';
    document.getElementById('contentLifeTwoTab').className = 'accordionPanelTab highlight';
}










document.getElementById('designContentOne').style.display = 'none';
document.getElementById('designContentTwo').style.display = 'none';

function hidePanelsDesign() {
    document.getElementById('designContentOne').style.display = 'none';
    document.getElementById('designContentTwo').style.display = 'none';
    document.getElementById('contentDesignOneTab').className = 'accordionPanelTab';
    document.getElementById('contentDesignTwoTab').className = 'accordionPanelTab';
}

function showDesignContentOne() {
    hidePanelsDesign();
    document.getElementById('designContentOne').style.display = 'block';
    document.getElementById('contentDesignOneTab').className = 'accordionPanelTab highlight';
}

function showDesignContentTwo() {
    hidePanelsDesign();
    document.getElementById('designContentTwo').style.display = 'block';
    document.getElementById('contentDesignTwoTab').className = 'accordionPanelTab highlight';
}


document.getElementById('lifeContentOne').style.display = 'none';
document.getElementById('lifeContentTwo').style.display = 'none';

function hidePanels() {
    document.getElementById('lifeContentOne').style.display = 'none';
    document.getElementById('lifeContentTwo').style.display = 'none';
    document.getElementById('contentLifeOneTab').className = 'accordionPanelTab';
    document.getElementById('contentLifeTwoTab').className = 'accordionPanelTab';
}

function showLifeContentOne() {
    hidePanels();
    document.getElementById('lifeContentOne').style.display = 'block';
    document.getElementById('contentLifeOneTab').className = 'accordionPanelTab highlight';
}

function showLifeContentTwo() {
    hidePanels();
    document.getElementById('lifeContentTwo').style.display = 'block';
    document.getElementById('contentLifeTwoTab').className = 'accordionPanelTab highlight';
}










document.getElementById('designContentOne').style.display = 'none';
document.getElementById('designContentTwo').style.display = 'none';

function hidePanels() {
    document.getElementById('designContentOne').style.display = 'none';
    document.getElementById('designContentTwo').style.display = 'none';
    document.getElementById('contentDesignOneTab').className = 'accordionPanelTab';
    document.getElementById('contentDesignTwoTab').className = 'accordionPanelTab';
}

function showLifeContentOne() {
    hidePanels();
    document.getElementById('designContentOne').style.display = 'block';
    document.getElementById('contentDesignOneTab').className = 'accordionPanelTab highlight';
}

function showLifeContentTwo() {
    hidePanels();
    document.getElementById('designContentTwo').style.display = 'block';
    document.getElementById('contentDesignTwoTab').className = 'accordionPanelTab highlight';
}


document.getElementById('contentOne').style.display = 'none';
document.getElementById('contentTwo').style.display = 'none';

function hidePanels() {
    document.getElementById('contentOne').style.display = 'none';
    document.getElementById('contentTwo').style.display = 'none';
    document.getElementById('contentOneTab').className = 'accordionPanelTab';
    document.getElementById('contentTwoTab').className = 'accordionPanelTab';
}

function showContentOne() {
    hidePanels();
    document.getElementById('contentOne').style.display = 'block';
    document.getElementById('contentTwo').className = 'accordionPanelTab highlight';
}

function showContentTwo() {
    hidePanels();
    document.getElementById('contentTwo').style.display = 'block';
    document.getElementById('contentOne').className = 'accordionPanelTab highlight';
}

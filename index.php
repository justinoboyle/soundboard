<html data-ng-app="sbApp">
<head>
    <title>[Insert Soundboard Name Here]</title>
    <link rel="stylesheet" type="text/css" href="lib/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="assets/index.css" />
</head>
<body>
    
    <div class="!include" id="navbar"></div>
    
    <div class="container">
        <div data-ng-view="" id="content"></div>
    </div>
    
    <script src="lib/js/include.js"></script>
    <script src="lib/js/jquery.js"></script>
    <script src="lib/js/bootstrap.js"></script>
    <script src="lib/js/angular.js"></script>
    <script src="lib/js/angular-route.js"></script>
    <script src="assets/index.js"></script>
</body>
</html>
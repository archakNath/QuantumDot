(function () {
    var width,
        height,
        largeHeader,
        canvas,
        ctx,
        points,
        centerX,
        centerY,
        radius,
        animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        largeHeader = document.getElementById("large-header");
        canvas = document.getElementById("demo-canvas");

        var mainElement = document.querySelector('main');
        var mainRect = mainElement.getBoundingClientRect();

        canvas.width = mainRect.width;
        canvas.height = mainRect.height;

        ctx = canvas.getContext("2d");

        // Define circular area parameters
        centerX = canvas.width * 1.5;
        centerY = canvas.height * 2.5;
        radius = canvas.width * 1.5;

        // Adjust for smaller screens
        if (canvas.width < 700 || canvas.height > 700 || (canvas.width < 1150 && canvas.height < 700)) {
            centerX = canvas.width * 1.5;
            centerY = canvas.height / 30000;
            radius = canvas.width * 1.2;
        }

        // Create points
        points = [];
        var pointSize = 140; // Increased pointSize to reduce the number of circles
        if (window.innerWidth > 1500) {
            pointSize = 190;
        }
        for (var x = 0; x < canvas.width; x = x + pointSize) {
            for (var y = 0; y < canvas.height; y = y + pointSize) {
                var px = x + (Math.random() * pointSize);
                var py = y + (Math.random() * pointSize);
                var p = { x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // Find the 5 closest points for each point
        for (var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for (var j = 0; j < points.length; j++) {
                var p2 = points[j];
                if (!(p1 == p2)) {
                    var placed = false;
                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        var pointRadius = 13 + Math.random() * 5;
        if (window.innerWidth > 1500) {
            pointRadius += 5;
        }

        // Assign a circle to each point
        for (var i in points) {
            var c = new Circle(
                points[i],
                pointRadius, // Increased the radius of each circle
                "rgba(255,255,255,0.3)"
            );
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        // Remove mouse and resize event listeners
    }

    // Animation
    function initAnimation() {
        animate();
        for (var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (var i in points) {
                // Calculate distance from the circular area center
                var distanceFromCenter = Math.sqrt(
                    Math.pow(points[i].x - centerX, 2) +
                    Math.pow(points[i].y - centerY, 2)
                );
                var fadeFactor = Math.max(0, 1 - (distanceFromCenter / radius));

                // Make sure points within the circle have some visibility
                points[i].active = fadeFactor * 0.3;
                points[i].circle.active = fadeFactor * 0.6;

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1 + 1 * Math.random(), {
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100,
            ease: Circ.easeInOut,
            onComplete: function () {
                shiftPoint(p);
            }
        });
    }

    // Canvas manipulation
    function drawLines(p) {
        if (!p.active) return;
        for (var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
            ctx.stroke();
        }
    }

    function Circle(pos, rad, color) {
        var _this = this;

        // constructor
        (function () {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function () {
            if (!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
})();

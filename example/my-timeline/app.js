'use strict';

var wavesurfer;

// Init & load
document.addEventListener('DOMContentLoaded', function() {
	var options = {
		container: '#waveform',
		waveColor: 'violet',   // 紫罗兰
		progressColor: 'purple',
		loaderColor: 'purple',
		cursorColor: 'navy',
		plugins: [
			WaveSurfer.timeline.create({
				container: '#wave-timeline'
      }),
      WaveSurfer.regions.create({
        regions: [
          {
            start: 1,
            end: 3,
            color: 'hsla(400, 100%, 30%, 0.5)'
          },
          {
            start: 5,
            end: 7,
            color: 'hsla(200, 50%, 70%, 0.4)'
          }
        ],
        dragSelection: {
          slop: 5
        }
      })
		]
	};

	if (location.search.match('scroll')) {
		options.minPxPerSec = 100;
		options.scrollParent = true;
	}

	if (location.search.match('normalize')) {
		options.normalize = true;
	}

	// Init wavesurfer
	wavesurfer = WaveSurfer.create(options);

	/* Progress bar */
	(function() {
		var progressDiv = document.querySelector('#progress-bar');
		var progressBar = progressDiv.querySelector('.progress-bar');

		var showProgress = function(percent) {
			progressDiv.style.display = 'block';
			progressBar.style.width = percent + '%';
		};

		var hideProgress = function() {
			progressDiv.style.display = 'none';
		};

		wavesurfer.on('loading', showProgress);
		wavesurfer.on('ready', hideProgress);
		wavesurfer.on('destroy', hideProgress);
		wavesurfer.on('error', hideProgress);
	})();

	wavesurfer.load('../media/meetyou.mp3');
});

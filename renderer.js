const requestAccessButton = document.getElementById('requestAccess');
const output = document.getElementById('output');

requestAccessButton.addEventListener('click', async () => {
	try {
		const midiAccess = await navigator.requestMIDIAccess({ sysex: true });
		output.innerHTML = 'MIDI access granted with SysEx!';
		console.log('MIDI Access:', midiAccess);
	} catch (error) {
		output.innerHTML = `Error: ${error.message}`;
		console.error('MIDI Access Error:', error);
	}
});

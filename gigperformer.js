/// Song Control

function set_setlist(val) {
	val = val-1 ;
	local.send("/GigPerformer/SelectSetList", val);
}

function set_song(val) {
	val = val-1 ;
	local.send("/SelectSongByIndex", val);
}

function prev_song() {
	local.send("/GigPerformer/PrevSong");
}

function next_song() {
	local.send("/GigPerformer/NextSong");
}

function songpart_down() {
	local.send("/Song/MoveDown");
}

function songpart_up() {
	local.send("/Song/MoveUp");
}

function set_songpart(val) {
	val = val-1 ;
	local.send("/Song/SwitchToPart", val);
}

function prev_songpart() {
	local.send("/Song/PrevPart");
}

function next_songpart() {
	local.send("/Song/NextPart");
}

function clear_songpart() {
	local.send("/SongPart/ClearSnapshot");
}


/// Rack Control

function recall_rack(val) {
	val = val-1 ;
	local.send("/GigPerformer/SwitchToRack", val);
}

function recall_rackspace(val) {
	val = val-1 ;
	local.send("/GigPerformer/SwitchToRackSpace", val);
}

function prev_space() {
	local.send("/GigPerformer/PrevRackSpace");
}

function next_space() {
	local.send("/GigPerformer/NextRackSpace");
}

function prev_variation() {
	local.send("/RackSpace/PrevVariation");
}

function next_variation() {
	local.send("/RackSpace/NextVariation");
}

function move_down() {
	local.send("/GigPerformer/MoveDown");
}

function move_up() {
	local.send("/GigPerformer/MoveUp");
}



/// Master Control

function main_level(val) {
	local.send("/SetMasterFader", val);
}

function level_full() {
	local.send("/SetMasterFader", 1.0);
}

function level_mute() {
	local.send("/SetMasterFader", 0.0);
}

function panic() {
	local.send("/Panic");
}

function global_play(val) {
	local.send("/Play", val);
}

function set_bpm(val) {
	local.send("/SetBPM", val);
}

/// OSC-Handles

function osc_button(name, val) {
	local.send("/"+name+"/SetValue", val);
}

function osc_encoder(name, val) {
	local.send("/"+name+"/SetValue", val);
}

function osc_fader(name, val) {
	local.send("/"+name+"/SetValue", val);
}

function osc_label(name, val) {
	local.send("/"+name+"/SetCaption", val);
}

function reset_value(name, val) {
	local.send("/"+name+"/SetResetValue", val);
}

function reset(name) {
	local.send("/"+name+"/Reset");
}

/// Actions

function abletonlink(val) {
	local.send("/SetAbletonLinkStatus", val);
}

function cc_message(n, name, val1, val2, val3) {
	local.send("/"+name+"/CC", val1, val2, val3);
}

function pc_message(n, name, val1, val2) {
	local.send("/"+name+"/PC", val1, val2);
}


function note_message(n, name, val1, val2, val3) {
	local.send("/"+name+"/Note", val1, val2, val3);
}


/// Requests

function get_setlist() {
	local.send("/GigPerformer/GetSetLists");
}

function get_songlist() {
	local.send("/GigPerformer/GetSongLists");
}

function get_songparts() {
	local.send("/Song/GetSongParts");
}

function get_current_songname() {
	local.send("/CurrentSongName");
}

function get_SongPart_x_Name() {
	local.send("/SongPart0Name");
}

function get_bpm() {
	local.send("/GetCurrentBPM");
}

function refresh() {
	local.send("/Refresh");
}
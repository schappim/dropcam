exports.probeGreeting = {
  "contents":[
    { "type":"paragraph",  "text":"Here you are able to manage your IP cameras connected to the Ninja Platform."},
    { "type": "submit", "name": "Add New", "rpc_method": "manual_get_url" },
    { "type": "submit", "name": "Remove Existing", "rpc_method": "manual_show_remove" }

  ]
};

exports.fetchIpModal = {
  "contents":[
    { "type":"paragraph",    "text":"Please enter the username and password for your Dropcam"},
    { "type":"input_field_text", "field_name": "username", "value": "", "label": "Dropcam Username", "placeholder": "username", "required": true},
    { "type":"input_field_text", "field_name": "password", "value": "", "label": "Dropcam Password", "placeholder": "password", "required": true},
    { "type":"submit"   ,     "name": "Add", "rpc_method": "manual_set_url" }
  ]
};

exports.removeIpModal = {
  "contents":[
    { "type":"paragraph",    "text":"Please choose the URL to remove"},
    { "type": "input_field_select", "field_name": "snapshot_url", "label": "Choose URL", "options": [{ "name": "No urls", "value": "", "selected": true}], "required": false },
    { "type":"submit"   ,    "name": "Remove", "rpc_method": "manual_remove_url" }
  ]
};


exports.removeIpSuccess = {
  "contents": [
    { "type":"paragraph",    "text":"Your IP camera has been removed."},
    { "type":"paragraph",    "text":"Important: you will still need to manually delete the individual cameras from your dashboard"},
    { "type":"close", "text":"Close"}
  ]
}

exports.finish = {
  "finish": true
};

import Ember from "ember";

export default Ember.View.extend({
  templateName: "s3-uploader",
  url: '',

  filesDidChange: (function() {
    var uploadUrl = this.get('url');
    var files = this.get('files');

    var uploader = Ember.S3Uploader.create({
      url: uploadUrl,
      type: 'GET'
    });

    uploader.on('didUpload', function(response) {
      debugger
    });

    uploader.on('progress', function(e) {
      $("#status").html('Upload progress: ' + e.percent + '%');
    });

    if (!Ember.isEmpty(files)) {
      debugger
      uploader.upload(files[0]); 
    }
  }).observes('files'),

  change: function(e) {
    var input = e.target;
    if (!Ember.isEmpty(input.files)) {
      Ember.set(this, 'files', input.files);
    }
  }
});
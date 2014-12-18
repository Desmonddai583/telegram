import Ember from "ember";

export default EmberUploader.FileField.extend({
  url: '',
  photoPath: '',

  filesDidChange: (function() {
    var uploadUrl = this.get('url');
    var files = this.get('files');
    var component = this;

    var uploader = EmberUploader.S3Uploader.create({
      url: uploadUrl,
      type: 'GET'
    });

    uploader.on('didUpload', function() {
    });

    uploader.on('didSign', function(response) {
      var path = "//" + response.bucket + ".s3.amazonaws.com";
      this.set("photoPath", path + "/" + response.key);
    });

    uploader.on('progress', function(e) {
      $("#status").html('Upload progress: ' + e.percent + '%');
    });

    if (!Ember.isEmpty(files)) {
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
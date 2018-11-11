var gulp = require("gulp");
require("dotenv").config();
var s3 = require("gulp-s3-upload")({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET
});
var mime = require("mime")
var run = require("gulp-run-command").default;


gulp.task("build", run("npm run build"))

gulp.task("upload", ["build"], function() {
    gulp.src([
        "build/**"
    ])
    .pipe(s3({
        Bucket: 'simplus-digital',
		ACL: 'public-read',
        charset : "UTF-8",
        metadataMap: {
            "uploadedVia": "gulp-s3-upload"
        }
    }, {
		charset : "UTF-8"
    }));
});
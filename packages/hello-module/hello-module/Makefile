make_dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
hello_framework := $(make_dir)/ios/Frameworks/Hello/Hello.xcframework

build.ios:
	OUTPUT_FRAMEWORK=$(hello_framework) make -C .. build.ios

clean.ios:
	rm -rf $(hello_framework)

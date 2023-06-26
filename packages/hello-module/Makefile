OUTPUT_FRAMEWORK ?= output/ios/Hello.xcframework

go_files := $(shell find . -iname '*.go')

all build: build.ios build.android

init:
	go run golang.org/x/mobile/cmd/gomobile init

build.ios: init $(OUTPUT_FRAMEWORK)
build.android: init output/android/hello.aar

fclean:
	rm -rf output

.PHONY: build.ios build.android fclean

### 

$(OUTPUT_FRAMEWORK): $(go_files)
	mkdir -p $(dir $@)
	go run golang.org/x/mobile/cmd/gomobile bind -v -o $@ -target ios ./framework/hello

output/android/hello.aar: $(go_files)
	@mkdir -p $(dir $@)
	go run golang.org/x/mobile/cmd/gomobile bind -v -o $@ -target android ./framework/hello

# Video 2 Event Simulator

To run the video to event simulator you need to first run the python script viz_video_to_event_simulator.py 

```python
python viz_video_to_event_simulator.py -i input_video.mp4 -o output_file.dat --no_display
```
using the no display flag makes things faster so that the PC is not overloaded with the CV imshow as well.

further you also need to use a dat file to avi converter 

For this you need to build the C++ project under the folder metavision_file_to_video
```
cd metavision_file_to_video
```
```
mkdir build
```
```
cd build
```
```
cmake .. 
```
```
cmake --build .
```
Then you will have the .exe file in the build folder under the Debug folder
Copy it over to the root folder 

Then you can use it 
```
./metavision_file_to_video.exe -i output.dat -o output.avi
```

This will create the event frame video from the original RGB video

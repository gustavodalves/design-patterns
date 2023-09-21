import VideoObserver from "./ExampleObserver";
import VideoSubject from "./ExampleSubject";

const observer1 = new VideoObserver(1)
const observer2 = new VideoObserver(2)
const observer3 = new VideoObserver(3)
const observer4 = new VideoObserver(4)

const subject = new VideoSubject()

subject.subcribe(observer1)
subject.subcribe(observer2)

subject.notifyAll()

subject.subcribe(observer3)
subject.subcribe(observer4)

subject.notifyAll()

subject.unsubscribe(observer3)
subject.notifyAll()

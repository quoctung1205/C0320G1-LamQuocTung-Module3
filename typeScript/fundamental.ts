import "./scss/style.scss"

/**
 * Variable and Data type
 */

// tslint:disable

/**
 * var vs let/const
 */

// function main() {
//   console.log("START");
//   if (true) {
//     var lang = "vi";
//     let target = "en-us";
//     console.log("inside block");
//     console.log(target);
//   }
//   console.log(lang);
//   console.log(target);
// }


function main() {
    var x = 5;
    console.log(x);
    var x = 10;
    console.log(x);
  
    let a = 55;
    console.log(a);
    let b = 100;
    console.log(b);
  }
  
  
  /*
  function main() {
    console.log(x);
    var x = 5;
    console.log(y);
    let y = 10;
  }
   */
  
  /**
   * Data types
   */
  /*
  function main() {
    let message: string;
    let total: number = 100;
    let isProduction = true;
    let prices: Array<number> = [120, 88, 60];
    let languages: string[] = ['vi', 'en-us'];
    let now = new Date();
    let unknown: any;
    enum Direction {
      UP,
      DOWN,
      LEFT,
      RIGHT
    };
    function log(msg: string): void {
      console.log(msg)
    }
    interface IPost {
      id: string;
      title: string;
      body?: string;
    }
    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';
    const post: IPost = {
    };
    message = 50;
    function getPost(postId: string): IPost {
      // do something to retrieve post
      return {
        id: postId,
        title: 'Post Title',
        body: 'Post Body',
        extra: 'data'
      } as IPost;
    }
  }
   */
  
  // function main() {}
  
  // tslint:enable
  
  main();
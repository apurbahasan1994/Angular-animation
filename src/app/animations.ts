import { animate, animateChild, animation, group, keyframes, query, stagger, state, style, transition, trigger, useAnimation } from "@angular/animations";


// cretaes reusable animation
export const bounceOutLeftAnimation = animation(
  animate('1000ms 500ms ease-out', keyframes([
    style({
      offset: .2, opacity: 1,
      transform: 'translateX(20px)'
    }),
    style({
      offset: 1, opacity: 0,
      transform: 'translateX(-100%)'
    })
  ]))
);
export const fade1 =
  trigger('fade1', [

    // state change exp, steps that run during that animation
    transition('void=>*', [style({
      opacity: 0
    }), animate(1000, style({ background: 'red', opacity: 1 }))]),
    transition('*=>void', [style({
      opacity: 0
    }), animate(1000)])
  ],

  );
export const fade =
  trigger('fade', [
    state('void', style({
      opacity: 0
    })),
    transition(
      ':enter,:leave', [
      animate(2000,)
    ]
    ),
  ]);
export const slide = trigger(
  'slide',
  [
    transition(':enter', [
      style({
        transform: 'translateX(-10px)'
      }),
      animate(500)
    ]),
    transition(":leave", [
      animate('5000ms 1s', style({
        transform: 'translateX(-100%)'
      }))
    ])
  ]
);

export const bounceLeft = trigger(
  'bounce',
  [
    transition(':enter', [
      style({
        transform: 'translateX(-10px)'
      }),
      animate(500)
    ]),
    transition(":leave", [
      animate('1000ms 500ms ease-out', keyframes([
        style({
          offset: .2, opacity: 1,
          transform: 'translateX(20px)'
        }),
        style({
          offset: 1, opacity: 0,
          transform: 'translateX(-100%)'
        })
      ]))
    ])
  ]
);

export const todoAnimation = trigger('todo', [
  transition(':enter', [
    style({ opacity: 0 },), animate(2000)
  ]),
  transition(':leave',
    [style({ background: 'red' }), animate(1000), useAnimation(bounceOutLeftAnimation)]
  )
]);

// parameterized animation
export const fadeInAnimation = animation(
  [
    style({ opacity: 0 }),
    animate('{{duration}} {{easing}}')
  ],
  {
    params: {
      duration: '2s',
      easing: 'ease-out'
    }
  }
);

export const parameterixedFade = trigger('fade', [

  transition(':enter', [useAnimation(fadeInAnimation, {
    params: {
      duration: '5000ms'
    }
  },)]),
  transition(':leave', animate(2000, style({ opacity: 0 })))

]);

// sequential animation

trigger('todosAnimation', [
  transition(':enter', [
    // [the steps that should run when the h1 enters the view ]
    query('h1', [
      style({
        transform: 'translateY(-20px)'
      }),
      animate(1000)

    ]),
    query('@todoAnimation',
      animateChild(), { optional: true })
  ])
]),
  trigger('todoAnimation', [
    transition(':enter', [useAnimation(fadeInAnimation, {
      params: {
        duration: '2s'
      }
    })]),
    transition(':leave', [
      style({
        backgroundColor: 'red'
      }),
      animate(1000),
      useAnimation(bounceOutLeftAnimation)
    ])
  ])
// parrale animation
trigger('todosAnimation', [
  transition(':enter', [
    group([
      // [the steps that should run when the h1 enters the view ]
      query('h1', [
        style({
          transform: 'translateY(-20px)'
        }),
        animate(1000)

      ]),
      query('@todoAnimation',
        animateChild(), { optional: true })
    ]),

  ])
]),
  trigger('todoAnimation', [
    transition(':enter', [useAnimation(fadeInAnimation, {
      params: {
        duration: '2s'
      }
    })]),
    transition(':leave', [
      style({
        backgroundColor: 'red'
      }),
      animate(1000),
      useAnimation(bounceOutLeftAnimation)
    ])
  ])

// staggering animation
trigger('todosAnimation', [
  transition(':enter', [
    group([
      // [the steps that should run when the h1 enters the view ]
      query('h1', [
        style({
          transform: 'translateY(-20px)'
        }),
        animate(1000)

      ]),
      query('@todoAnimation',
        stagger(200, animateChild()), { optional: true })
    ]),

  ])
]),
  trigger('todoAnimation', [
    transition(':enter', [useAnimation(fadeInAnimation, {
      params: {
        duration: '2s'
      }
    })]),
    transition(':leave', [
      style({
        backgroundColor: 'red'
      }),
      animate(1000),
      useAnimation(bounceOutLeftAnimation)
    ])
  ])


  // expand unexpand animation
  trigger('expandCollapse',[

    state('collapsed',style({
      height:0,overflow:
      'hidden',paddingTop:
      0,paddingBottom:0})),
    state('expanded',style({height:'*',padding:'*',overflow:'auto'})),
    transition('collapsed=>expanded',[
      animate('300ms ease-out')
    ]),
    transition('expanded=>collapsed',[
      animate('300ms ease-in')
    ])

  ])


  // multi step animation
  trigger("expandCollapse", [
    state(
      "collapsed",
      style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      })
    ),
    // state("expanded", style({ height: "*", padding: "*",  })),
    transition("collapsed=>expanded", [ animate("300ms ease-out",style({ height: "*", padding: "*",  })),animate('500ms', style({ opacity: 1 }))]),
    transition("expanded=>collapsed", [animate("300ms ease-in")]),
  ])

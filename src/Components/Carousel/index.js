import React, { Component } from "react";
import "./Carousel.css";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const Carousel = (PassedComponent) => {
   return class extends Component {
      constructor(props) {
         super(props);

         this.state = {
            slide: 0,
            isShowSlide: true, // true : next , false : pre
         };
      }

      onChangesSlide = (slide, countSlide) => {
         if (
            slide + this.state.slide >= 0 &&
            slide + this.state.slide < countSlide
         ) {
            if (slide > 0) {
               this.setState({
                  isShowSlide: true,
                  slide: this.state.slide + slide,
               });
            } else {
               this.setState({
                  isShowSlide: false,
                  slide: this.state.slide + slide,
               });
            }
         }
      };

      render() {
         const animationNextSlideShow = keyframes`
         0% {
            left: ${(this.state.slide - 1) * -100}%;
         }
         100% {
            left: ${this.state.slide * -100}%;
         }
      `;

         const animationPreSlideShow = keyframes`
      0% {
         left: ${(this.state.slide + 1) * -100}%;
      }
      100% {
         left: ${this.state.slide * -100}%;
      }
      `;

         const NextSlides = styled.div`
            animation-name: ${animationNextSlideShow};
            left: ${(this.state.slide - 1) * -100}%;
         `;

         const PreSlides = styled.div`
            animation-name: ${animationPreSlideShow};
            left: ${(this.state.slide + 1) * -100}%;
         `;

         const countSlide = this.props.countSlide;

         return (
            <div className="carousel">
               <button
                  className="pre-slide rotate_180"
                  onClick={() => {
                     this.onChangesSlide(-1, countSlide);
                  }}
               >
                  <i className="fas fa-chevron-right"></i>
               </button>

               {this.state.isShowSlide ? (
                  <NextSlides className="slides">
                     <PassedComponent {...this.props}></PassedComponent>
                  </NextSlides>
               ) : (
                  <PreSlides className="reslides">
                     <PassedComponent {...this.props}></PassedComponent>
                  </PreSlides>
               )}
               <button
                  className="next-slide "
                  onClick={() => {
                     this.onChangesSlide(1, countSlide);
                  }}
               >
                  <i className="fas fa-chevron-right"></i>
               </button>
            </div>
         );
      }
   };
};

Carousel.propTypes = {
   movies: PropTypes.array,
};

Carousel.defaultProps = {
   movies: [],
};

export default Carousel;
